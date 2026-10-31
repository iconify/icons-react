import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/x/x3yyiab7u.css';
import '../../css/s/sou7c--qw.css';
import '../../css/k/k4kerw0_e.css';
import '../../css/u/uya6wcbfz.css';
import '../../css/r/r2b6r36-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="x3yyiab7u"/><path class="sou7c--qw wm-shine"/><path class="k4kerw0_e wm-k"/><path class="uya6wcbfz wm-a"/><path class="r2b6r36-w wm-deco"/></g>`,
		"fallback": "withicons-kawaii:candy-cane",
	});
}

export default Component;
