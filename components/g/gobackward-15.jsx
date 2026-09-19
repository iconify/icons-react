import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyxe_guqx.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyxe_guqx"/>`,
		"fallback": "f7:gobackward-15",
	});
}

export default Component;
