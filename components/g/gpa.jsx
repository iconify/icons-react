import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcktnkb4m.css';
import '../../css/q/q6m--wbvm.css';
import '../../css/d/dhms69pem.css';
import '../../css/e/e_ohi9xtb.css';
import '../../css/m/m0h17nkyl.css';
import '../../css/j/jo39ibclw.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcktnkb4m"/><path class="q6m--wbvm"/><path class="dhms69pem"/><path class="e_ohi9xtb"/><path class="m0h17nkyl"/><path class="jo39ibclw"/>`,
		"fallback": "fxemoji:gpa",
	});
}

export default Component;
