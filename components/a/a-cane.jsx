import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0b9b_y4l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0b9b_y4l"/>`,
		"fallback": "icon-park:a-cane",
	});
}

export default Component;
