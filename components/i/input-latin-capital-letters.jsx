import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb7gpob6v.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb7gpob6v"/>`,
		"fallback": "dinkie-icons:input-latin-capital-letters",
	});
}

export default Component;
