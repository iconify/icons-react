import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsl2jyqjy.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsl2jyqjy"/>`,
		"fallback": "dinkie-icons:circle",
	});
}

export default Component;
