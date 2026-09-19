import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/p/pqia5ybpf.css';
import '../../css/y/yg91g4wbg.css';
import '../../css/t/tmt74cc5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><ellipse transform="matrix(-1 0 0 1 20 2)" class="pqia5ybpf"/><path class="yg91g4wbg"/><path class="tmt74cc5l"/></g>`,
		"fallback": "akar-icons:coin",
	});
}

export default Component;
