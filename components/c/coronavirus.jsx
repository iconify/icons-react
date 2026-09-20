import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe3qr6bzc.css';
import '../../css/b/bkyqy-baq.css';
import '../../css/j/jg2dkzt5u.css';
import '../../css/t/t4ulnobzr.css';
import '../../css/r/rirsv2xyn.css';
import '../../css/d/dmrojcb9v.css';
import '../../css/f/fxqvrobnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="oe3qr6bzc"/><circle class="bkyqy-baq"/><circle class="jg2dkzt5u"/><circle class="t4ulnobzr"/><path class="rirsv2xyn"/><path class="dmrojcb9v"/><path class="fxqvrobnr"/>`,
		"fallback": "uim:coronavirus",
	});
}

export default Component;
