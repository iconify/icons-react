import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0y859buk.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0y859buk"/>`,
		"fallback": "dinkie-icons:clipboard-small-filled",
	});
}

export default Component;
