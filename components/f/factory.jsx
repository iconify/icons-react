import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf-btsy5n.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf-btsy5n"/>`,
		"fallback": "dinkie-icons:factory",
	});
}

export default Component;
