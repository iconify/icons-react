import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avfae6r4y.css';
import '../../css/z/zktzbwarh.css';
import '../../css/j/jpzfqppud.css';
import '../../css/c/cwx99dqze.css';

const viewBox = {"width":633.333,"height":633.333};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="avfae6r4y"><path class="zktzbwarh"/><path class="jpzfqppud"/></g><path class="cwx99dqze"/>`,
		"fallback": "thesvg-color:bayer",
	});
}

export default Component;
