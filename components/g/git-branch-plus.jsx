import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wxihkebcp.css';
import '../../css/e/esgjdlmqa.css';
import '../../css/i/imn_1acgr.css';
import '../../css/n/n8_-hmbhy.css';
import '../../css/h/hs-paebjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow wxihkebcp"/><path class="esgjdlmqa"/><path class="imn_1acgr"/><path class="n8_-hmbhy"/><path class="hs-paebjo wm-s"/></g>`,
		"fallback": "withicons-retro:git-branch-plus",
	});
}

export default Component;
