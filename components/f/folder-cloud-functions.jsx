import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuf42lb8e.css';
import '../../css/w/wizsllbsf.css';
import '../../css/r/r2jotkb5j.css';
import '../../css/i/iqbdq2_hf.css';
import '../../css/o/oxaaevbpg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kuf42lb8e"><defs><path id="SVGF6nSbbPT" class="wizsllbsf"/></defs><path class="r2jotkb5j"/><path class="iqbdq2_hf"/><use href="#SVGF6nSbbPT" transform="translate(0 -1)"/><use href="#SVGF6nSbbPT" transform="matrix(1 0 0 -1 0 20)"/><path class="oxaaevbpg"/><use href="#SVGF6nSbbPT" transform="matrix(-1 0 0 1 23 -1)"/><use href="#SVGF6nSbbPT" transform="rotate(180 11.5 10)"/></g>`,
		"fallback": "material-icon-theme:folder-cloud-functions",
	});
}

export default Component;
