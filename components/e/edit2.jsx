import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/e/evrgy0fzj.css';
import '../../css/s/s-j1bhbre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="evrgy0fzj"/><path class="s-j1bhbre"/></g>`,
		"fallback": "reicon:edit2",
	});
}

export default Component;
