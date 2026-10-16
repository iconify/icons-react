import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qirrawbdw.css';
import '../../css/o/odcemnnsx.css';
import '../../css/f/f0t8eobay.css';
import '../../css/n/n40awujht.css';

const viewBox = {"width":166,"height":166};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="qirrawbdw"/><path class="odcemnnsx"/><path class="f0t8eobay"/><path class="n40awujht"/></g>`,
		"fallback": "thesvg-color:bentopdf",
	});
}

export default Component;
