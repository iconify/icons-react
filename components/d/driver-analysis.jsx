import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml-w7dbdb.css';
import '../../css/i/icpdw850u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ml-w7dbdb"/><path class="icpdw850u"/>`,
		"fallback": "carbon:driver-analysis",
	});
}

export default Component;
