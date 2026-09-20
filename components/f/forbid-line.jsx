import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezt2hxb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezt2hxb4f"/>`,
		"fallback": "ri:forbid-line",
	});
}

export default Component;
