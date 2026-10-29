import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rksayxbsr.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/k/kv8k2xgor.css';
import '../../css/j/j29ih9old.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="rksayxbsr"/><path class="qr4ochb5c wm-s"/><path class="kv8k2xgor"/><path class="j29ih9old wm-a"/></g>`,
		"fallback": "withicons:bot-off-duo",
	});
}

export default Component;
