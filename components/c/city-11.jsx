import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iir0f5bog.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iir0f5bog"/>`,
		"fallback": "maki:city-11",
	});
}

export default Component;
