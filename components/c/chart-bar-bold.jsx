import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sw7di4bjc.css';
import '../../css/i/ia9-m-qxc.css';
import '../../css/z/zmvg0zbao.css';
import '../../css/y/y8ogg5eag.css';
import '../../css/a/afkeoib-c.css';
import '../../css/r/rc24i1bup.css';
import '../../css/f/fkwkribsr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sw7di4bjc"/><path class="ia9-m-qxc"/><path clip-rule="evenodd" class="zmvg0zbao"/><path class="y8ogg5eag"/><path clip-rule="evenodd" class="afkeoib-c"/><path class="rc24i1bup"/><path class="fkwkribsr"/></g>`,
		"fallback": "glyphs:chart-bar-bold",
	});
}

export default Component;
