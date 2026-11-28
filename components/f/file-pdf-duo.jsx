import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul1do2bru.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cmwiddbxv.css';
import '../../css/h/hji4qyb_f.css';
import '../../css/u/ufm4c-buh.css';
import '../../css/r/rlf1jguyc.css';
import '../../css/v/vqln7qj6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary ul1do2bru"/><g class="dt0cm9dhy primary"><path class="cmwiddbxv"/><path class="hji4qyb_f"/><path class="ufm4c-buh"/><path class="rlf1jguyc"/><path class="vqln7qj6f"/></g>`,
		"fallback": "iconaut:file-pdf-duo",
	});
}

export default Component;
