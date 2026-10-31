import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9bvnqb0c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9bvnqb0c"/>`,
		"fallback": "pinhead:eaved-open-gabled-building-with-chimney-and-door",
	});
}

export default Component;
