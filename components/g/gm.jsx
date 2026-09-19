import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/flkqk9ded.css';
import '../../css/l/lj3jycc9m.css';
import '../../css/n/n1kqxqblq.css';
import '../../css/r/r00q4lbzd.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="flkqk9ded"/><path class="lj3jycc9m"/><path class="n1kqxqblq"/><path class="r00q4lbzd"/></g>`,
		"fallback": "cif:gm",
	});
}

export default Component;
