import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp2o07q1l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp2o07q1l"/>`,
		"fallback": "carbon:data-vis-1",
	});
}

export default Component;
