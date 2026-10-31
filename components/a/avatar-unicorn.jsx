import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hrxkuwm3e.css';
import '../../css/p/pml_b6baw.css';
import '../../css/c/c73q3ebkv.css';
import '../../css/y/yx03xnboz.css';
import '../../css/z/zlkz1cv3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="hrxkuwm3e wm-shadow"/><path class="pml_b6baw wm-shadow"/><path class="c73q3ebkv"/><path class="yx03xnboz"/><path class="zlkz1cv3d"/></g>`,
		"fallback": "withicons-brutal:avatar-unicorn",
	});
}

export default Component;
