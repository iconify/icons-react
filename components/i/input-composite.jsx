import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d01hhabgo.css';

const viewBox = {"width":472,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d01hhabgo"/>`,
		"fallback": "zmdi:input-composite",
	});
}

export default Component;
