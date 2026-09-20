import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz6gkrbil.css';
import '../../css/e/eqg4ddc9e.css';
import '../../css/f/foig20byy.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/y/yhga54b-i.css';
import '../../css/a/a731-2tvo.css';
import '../../css/g/g3pjqklsk.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz6gkrbil"/><path class="eqg4ddc9e"/><circle class="foig20byy"/><g class="ij2x_72vy"><path class="yhga54b-i"/><path class="a731-2tvo"/><circle class="g3pjqklsk"/></g>`,
		"fallback": "openmoji:cut-of-meat",
	});
}

export default Component;
