import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vpxvdibwg.css';
import '../../css/i/i8ycrbbjm.css';
import '../../css/j/jyhp0fz-d.css';
import '../../css/c/cw36_6mco.css';
import '../../css/s/s-dcxqbqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vpxvdibwg wm-k"/><path class="i8ycrbbjm wm-a"/><path class="jyhp0fz-d wm-shadow"/><path class="cw36_6mco wm-a"/><path class="s-dcxqbqn wm-k"/></g>`,
		"fallback": "withicons:chart-line-engrave",
	});
}

export default Component;
