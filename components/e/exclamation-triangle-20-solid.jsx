import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpx34h5gm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kpx34h5gm"/>`,
		"fallback": "heroicons:exclamation-triangle-20-solid",
	});
}

export default Component;
