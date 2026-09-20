import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bnymf-bmk.css';
import '../../css/u/u3y7c2axj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bnymf-bmk"/><path class="u3y7c2axj"/></g>`,
		"fallback": "streamline-color:clubs-symbol",
	});
}

export default Component;
