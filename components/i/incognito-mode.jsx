import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vf7o6hbwi.css';
import '../../css/n/nv0kchhja.css';
import '../../css/q/qtnm21bch.css';
import '../../css/a/alwid7bre.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vf7o6hbwi"/><path class="nv0kchhja"/><path class="qtnm21bch"/><path class="alwid7bre"/></g>`,
		"fallback": "streamline-flex-color:incognito-mode",
	});
}

export default Component;
