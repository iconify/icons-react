import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/o/ocdart.css';
import '../../css/x/xwdvrd.css';
import '../../css/t/t11kpj.css';
import '../../css/i/ixkhpy.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-ssqjbr.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c ocdart"/><path class="xwdvrd"/><path class="a0m25c t11kpj"/><path class="a0m25c ixkhpy"/>`,
		"fallback": "line-md:chat-round-alert",
	});
}

export default Component;
