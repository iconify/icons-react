import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2pgv4bki.css';

const viewBox = {"width":16,"height":16.2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2pgv4bki"/>`,
		"fallback": "thesvg-color:altumptic",
	});
}

export default Component;
