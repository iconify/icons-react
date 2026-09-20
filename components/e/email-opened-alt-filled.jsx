import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt5c4z.css';
import '../../css/a/a0m25c.css';
import '../../css/o/ofn98h.css';
import '../../css/n/nrq0xo.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-from-64.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt5c4z"/><path class="a0m25c ofn98h"/><path class="a0m25c nrq0xo"/>`,
		"fallback": "line-md:email-opened-alt-filled",
	});
}

export default Component;
