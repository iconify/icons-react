import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyhu30znm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyhu30znm"/>`,
		"fallback": "simple-icons:fmod",
	});
}

export default Component;
