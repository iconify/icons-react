import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tivt4nbbz.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tivt4nbbz"/>`,
		"fallback": "dinkie-icons:informationsource",
	});
}

export default Component;
