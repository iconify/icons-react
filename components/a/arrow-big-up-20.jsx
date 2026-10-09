import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivydbo0ez.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivydbo0ez"/>`,
		"fallback": "energy-icons:arrow-big-up-20",
	});
}

export default Component;
