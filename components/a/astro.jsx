import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt5df8j4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt5df8j4b"/>`,
		"fallback": "meteor-icons:astro",
	});
}

export default Component;
