import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv5cqiwwd.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iv5cqiwwd"/>`,
		"fallback": "gis:directions",
	});
}

export default Component;
