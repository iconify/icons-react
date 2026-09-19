import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fin5uxb5s.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fin5uxb5s"/>`,
		"fallback": "fa7-brands:cloudversify",
	});
}

export default Component;
