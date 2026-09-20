import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr-rnw5oe.css';
import '../../css/e/esu5d1izo.css';
import '../../css/q/qzc_4zpef.css';
import '../../css/z/z04drlb1l.css';
import '../../css/w/w_5xkzbfr.css';
import '../../css/q/qgmt2ac5n.css';
import '../../css/e/et_nkmb4n.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="vr-rnw5oe"/><path class="esu5d1izo"/><path class="qzc_4zpef"/><g class="z04drlb1l"><path class="w_5xkzbfr"/><path class="qgmt2ac5n"/><path class="et_nkmb4n"/></g>`,
		"fallback": "openmoji:avalanche",
	});
}

export default Component;
