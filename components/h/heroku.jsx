import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2ik5l0cf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2ik5l0cf"/>`,
		"fallback": "simple-icons:heroku",
	});
}

export default Component;
