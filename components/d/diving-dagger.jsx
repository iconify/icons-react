import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we64jwbml.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we64jwbml"/>`,
		"fallback": "game-icons:diving-dagger",
	});
}

export default Component;
