import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4bty4nye.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4bty4nye"/>`,
		"fallback": "pinhead:alabama",
	});
}

export default Component;
