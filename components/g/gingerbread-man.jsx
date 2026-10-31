import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fi9apub5e.css';
import '../../css/a/aeipm-beo.css';
import '../../css/f/fh6r28bvx.css';
import '../../css/y/ymsz6-b_e.css';
import '../../css/s/s4ufcpb5d.css';
import '../../css/a/ahdlxccgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fi9apub5e wm-shadow"/><path class="aeipm-beo"/><path class="fh6r28bvx"/><path class="ymsz6-b_e"/><path class="s4ufcpb5d"/><path class="ahdlxccgr"/></g>`,
		"fallback": "withicons-retro:gingerbread-man",
	});
}

export default Component;
