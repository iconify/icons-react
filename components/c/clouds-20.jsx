import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8zmgnbro.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8zmgnbro"/>`,
		"fallback": "energy-icons:clouds-20",
	});
}

export default Component;
