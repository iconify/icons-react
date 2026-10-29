import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/unl3agsie.css';
import '../../css/u/uztpbxahe.css';
import '../../css/k/kmf2obczo.css';
import '../../css/x/xgzbdsjfp.css';
import '../../css/t/tjd70lztj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="unl3agsie wm-k"/><path class="uztpbxahe wm-a"/><path class="kmf2obczo wm-k"/><path class="xgzbdsjfp"/><path class="tjd70lztj"/></g>`,
		"fallback": "withicons-bauhaus:chinese-knot",
	});
}

export default Component;
