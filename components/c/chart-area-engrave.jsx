import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yrhaee07g.css';
import '../../css/i/i8ycrbbjm.css';
import '../../css/l/lvjvbab4v.css';
import '../../css/c/cw36_6mco.css';
import '../../css/g/gzms0bb9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k yrhaee07g"/><path class="i8ycrbbjm wm-a"/><path class="lvjvbab4v wm-shadow"/><path class="cw36_6mco wm-a"/><path class="gzms0bb9f wm-k"/></g>`,
		"fallback": "withicons:chart-area-engrave",
	});
}

export default Component;
