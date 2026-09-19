import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7ocakb4g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7ocakb4g"/>`,
		"fallback": "cib:gauges",
	});
}

export default Component;
