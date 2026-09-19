import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d94-6q2fa.css';
import '../../css/v/vl8cm6bpb.css';
import '../../css/z/z5cgsd6at.css';
import '../../css/n/nue5h2srb.css';
import '../../css/g/g179mkb8r.css';
import '../../css/x/x_gz5q_ti.css';
import '../../css/f/f8wj5hbpd.css';
import '../../css/h/hroi9oa4e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d94-6q2fa"/><path class="vl8cm6bpb"/><path class="z5cgsd6at"/><path class="nue5h2srb"/><path class="g179mkb8r"/><path class="x_gz5q_ti"/><path class="f8wj5hbpd"/><path class="hroi9oa4e"/>`,
		"fallback": "fxemoji:confetti",
	});
}

export default Component;
