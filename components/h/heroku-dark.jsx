import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h31y4wrru.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h31y4wrru"/>`,
		"fallback": "selfhst:heroku-dark",
	});
}

export default Component;
