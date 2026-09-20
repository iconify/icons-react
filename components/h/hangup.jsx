import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf3zqez6t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf3zqez6t"/>`,
		"fallback": "raphael:hangup",
	});
}

export default Component;
