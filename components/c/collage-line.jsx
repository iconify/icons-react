import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8a74-m5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8a74-m5a"/>`,
		"fallback": "ri:collage-line",
	});
}

export default Component;
