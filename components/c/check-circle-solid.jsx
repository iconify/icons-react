import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl3_1h40s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl3_1h40s"/>`,
		"fallback": "la:check-circle-solid",
	});
}

export default Component;
