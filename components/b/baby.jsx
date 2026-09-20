import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvoikgb8s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvoikgb8s"/>`,
		"fallback": "la:baby",
	});
}

export default Component;
