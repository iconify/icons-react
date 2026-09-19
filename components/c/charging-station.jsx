import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxix6l8rl.css';
import '../../css/h/hy4ycj-aj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxix6l8rl"/><path class="hy4ycj-aj"/>`,
		"fallback": "carbon:charging-station",
	});
}

export default Component;
