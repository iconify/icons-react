import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdsu42b0b.css';
import '../../css/z/z0-acdc1y.css';
import '../../css/x/x9_6abtpr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="jdsu42b0b"/><path class="z0-acdc1y"/><path class="x9_6abtpr"/>`,
		"fallback": "carbon:data-definition",
	});
}

export default Component;
