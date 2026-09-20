import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrjoz9gfb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrjoz9gfb"/>`,
		"fallback": "pinhead:heart-with-ecg-line",
	});
}

export default Component;
