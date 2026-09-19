import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gue8-4pzr.css';
import '../../css/f/f1ijkjbnr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gue8-4pzr"/><path class="f1ijkjbnr"/>`,
		"fallback": "carbon:chart-custom",
	});
}

export default Component;
