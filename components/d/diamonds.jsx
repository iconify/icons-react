import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/higzebb4l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="higzebb4l"/>`,
		"fallback": "icomoon-free:diamonds",
	});
}

export default Component;
