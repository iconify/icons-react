import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3fkllq0d.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3fkllq0d"/>`,
		"fallback": "dinkie-icons:compass",
	});
}

export default Component;
