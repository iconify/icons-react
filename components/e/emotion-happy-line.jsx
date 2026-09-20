import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ave5p0b5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ave5p0b5p"/>`,
		"fallback": "ri:emotion-happy-line",
	});
}

export default Component;
