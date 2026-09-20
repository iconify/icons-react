import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qamee38ti.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qamee38ti"/>`,
		"fallback": "wi:day-rain-wind",
	});
}

export default Component;
