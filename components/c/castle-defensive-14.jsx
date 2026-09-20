import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_gegxb1j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_gegxb1j"/>`,
		"fallback": "osmic:castle-defensive-14",
	});
}

export default Component;
