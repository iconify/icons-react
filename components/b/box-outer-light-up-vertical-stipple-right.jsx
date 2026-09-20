import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb-fjmb1q.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb-fjmb1q"/>`,
		"fallback": "memory:box-outer-light-up-vertical-stipple-right",
	});
}

export default Component;
