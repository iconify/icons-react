import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/af7ay2b5x.css';
import '../../css/k/k49bc9bqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="af7ay2b5x"/><path class="k49bc9bqz"/></g>`,
		"fallback": "iconoir:crop",
	});
}

export default Component;
