import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4yp20btu.css';
import '../../css/t/tqz5znvkx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4yp20btu"/><path class="tqz5znvkx"/>`,
		"fallback": "openmoji:brown-heart",
	});
}

export default Component;
