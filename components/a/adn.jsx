import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnpf4yb1n.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnpf4yb1n"/>`,
		"fallback": "fa7-brands:adn",
	});
}

export default Component;
