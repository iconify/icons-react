import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/aa85iwblr.css';
import '../../css/g/ggss81owd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="aa85iwblr"/><path class="ggss81owd"/></g>`,
		"fallback": "iconoir:gym",
	});
}

export default Component;
