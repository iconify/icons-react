import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnnr_6bez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lnnr_6bez"/>`,
		"fallback": "heroicons:finger-print-solid",
	});
}

export default Component;
