import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az7hstbmu.css';
import '../../css/e/ecj0x5bjg.css';
import '../../css/q/q0r50o_-q.css';
import '../../css/o/otit0l4ks.css';
import '../../css/q/quhlm1t5n.css';
import '../../css/f/fodwoxbkg.css';
import '../../css/t/tdhzq11dq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="az7hstbmu"/><path class="ecj0x5bjg"/><path class="q0r50o_-q"/><circle class="otit0l4ks"/><path class="quhlm1t5n"/><path class="fodwoxbkg"/><path class="tdhzq11dq"/>`,
		"fallback": "openmoji:grinning-face",
	});
}

export default Component;
