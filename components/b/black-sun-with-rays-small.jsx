import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/px0eocvtu.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="px0eocvtu"/>`,
		"fallback": "dinkie-icons:black-sun-with-rays-small",
	});
}

export default Component;
