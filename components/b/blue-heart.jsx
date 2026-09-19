import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sac2uywbx.css';
import '../../css/b/b164z8bwv.css';
import '../../css/n/nnv-o8bxk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sac2uywbx"/><path class="b164z8bwv"/><ellipse transform="rotate(30 23.477 12.594)" class="nnv-o8bxk"/></g>`,
		"fallback": "fluent-emoji-flat:blue-heart",
	});
}

export default Component;
