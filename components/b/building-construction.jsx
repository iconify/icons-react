import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mzlkcrbwv.css';
import '../../css/x/xa1bpr4re.css';
import '../../css/s/s7483bbtj.css';
import '../../css/y/ybm2l5b6u.css';
import '../../css/i/i_-qmgbhg.css';
import '../../css/h/hv8mpjxkx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mzlkcrbwv"/><path class="xa1bpr4re"/><path class="s7483bbtj"/><path class="ybm2l5b6u"/><path class="i_-qmgbhg"/><path class="hv8mpjxkx"/></g>`,
		"fallback": "fluent-emoji-flat:building-construction",
	});
}

export default Component;
