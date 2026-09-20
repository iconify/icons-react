import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/i/i5dnz5ika.css';
import '../../css/p/pmt3aepsb.css';
import '../../css/a/a3uyjetey.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="i5dnz5ika"/><path class="pmt3aepsb"/><path class="a3uyjetey"/></g>`,
		"fallback": "system-uicons:home-check",
	});
}

export default Component;
