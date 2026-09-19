import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfttfe_2y.css';
import '../../css/j/jc7bipbfp.css';
import '../../css/r/rc5rj3blu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qfttfe_2y"><path class="jc7bipbfp"/><path class="rc5rj3blu"/></g>`,
		"fallback": "catppuccin:cuda",
	});
}

export default Component;
