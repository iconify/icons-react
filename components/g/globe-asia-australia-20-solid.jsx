import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwk2m_bop.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lwk2m_bop"/>`,
		"fallback": "heroicons:globe-asia-australia-20-solid",
	});
}

export default Component;
