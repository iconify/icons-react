import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz6fzlwom.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz6fzlwom"/>`,
		"fallback": "fa-regular:hand-point-down",
	});
}

export default Component;
