import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z6g16vb1k.css';
import '../../css/z/zy1x-fbow.css';
import '../../css/q/q3fxh8bea.css';
import '../../css/r/rn6jb7b0d.css';
import '../../css/s/smm9s4byl.css';
import '../../css/q/qeoswe37f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z6g16vb1k"/><path class="zy1x-fbow"/><path class="q3fxh8bea"/><path class="rn6jb7b0d"/><path class="smm9s4byl"/><path class="qeoswe37f"/></g>`,
		"fallback": "iconaut:crosshair-x",
	});
}

export default Component;
