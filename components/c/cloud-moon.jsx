import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z25utjbxh.css';
import '../../css/j/jnr3bwb1w.css';
import '../../css/m/mrlvhobyb.css';
import '../../css/w/wcksz9bqg.css';
import '../../css/p/pfdr2obfh.css';
import '../../css/d/dq-5c2boh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z25utjbxh"/><path class="jnr3bwb1w"/><path class="mrlvhobyb"/><path class="wcksz9bqg"/><path class="pfdr2obfh"/><path class="dq-5c2boh"/></g>`,
		"fallback": "withicons-retro:cloud-moon",
	});
}

export default Component;
