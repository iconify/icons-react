import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/czxpq-bqo.css';
import '../../css/z/zd58oybwj.css';
import '../../css/e/ejbiwrpyo.css';
import '../../css/e/e7n46hafx.css';
import '../../css/e/e4c6so9oo.css';
import '../../css/f/fhh79qjaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="czxpq-bqo wm-shadow"/><path class="zd58oybwj"/><path class="ejbiwrpyo"/><path class="e7n46hafx"/><path class="e4c6so9oo"/><path class="fhh79qjaw"/></g>`,
		"fallback": "withicons-retro:files",
	});
}

export default Component;
