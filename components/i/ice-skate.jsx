import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q8jo13wlh.css';
import '../../css/s/s6n9quymf.css';
import '../../css/k/k8_6klqxr.css';
import '../../css/v/v9ze89yda.css';
import '../../css/w/wiu73qx2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="q8jo13wlh"/><path class="s6n9quymf"/><path class="k8_6klqxr"/><path class="v9ze89yda"/><path class="wiu73qx2k"/></g>`,
		"fallback": "iconaut:ice-skate",
	});
}

export default Component;
