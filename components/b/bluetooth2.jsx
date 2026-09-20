import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/f/f6jlogbtz.css';
import '../../css/f/f6944nbfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="f6jlogbtz"/><path class="f6944nbfl"/></g>`,
		"fallback": "reicon:bluetooth2",
	});
}

export default Component;
