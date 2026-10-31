import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/l/l09831bjg.css';
import '../../css/o/ou7halb-d.css';
import '../../css/o/o_jlcckqq.css';
import '../../css/w/wrkbx9bny.css';
import '../../css/u/ugzrm7bka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="l09831bjg"/><path class="ou7halb-d wm-shine"/><path class="o_jlcckqq wm-k"/><path class="wm-a wrkbx9bny"/><path class="ugzrm7bka wm-deco"/></g>`,
		"fallback": "withicons-kawaii:dna",
	});
}

export default Component;
