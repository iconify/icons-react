import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehr3fswqh.css';

const viewBox = {"width":988,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehr3fswqh"/>`,
		"fallback": "brandico:codepen",
	});
}

export default Component;
