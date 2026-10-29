import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e06evw1-w.css';
import '../../css/g/gu0phpbye.css';
import '../../css/o/oj_fzxb-a.css';
import '../../css/x/x4639o9tv.css';
import '../../css/c/c82oayb2j.css';
import '../../css/y/yatyg0v9y.css';
import '../../css/y/yrltrgtcf.css';
import '../../css/q/qz9z-gq3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="e06evw1-w wm-k"/><path class="gu0phpbye wm-a"/><path class="oj_fzxb-a wm-shadow"/><path class="wm-k x4639o9tv"/><path class="c82oayb2j wm-k"/><path class="wm-a yatyg0v9y"/><path class="wm-k yrltrgtcf"/><path class="qz9z-gq3n wm-a"/></g>`,
		"fallback": "withicons:git-compare-engrave",
	});
}

export default Component;
