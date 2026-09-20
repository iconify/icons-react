import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/o/ocdart.css';
import '../../css/x/xwdvrd.css';
import '../../css/k/kgi5dy.css';
import '../../css/j/jb6ooz.css';
import '../../css/r/rkzitn.css';
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
		"content": `<path class="a0m25c ocdart"/><path class="xwdvrd"/><path class="a0m25c kgi5dy"/><path class="a0m25c jb6ooz"/><path class="a0m25c rkzitn"/>`,
		"fallback": "line-md:chat-round-dots",
	});
}

export default Component;
