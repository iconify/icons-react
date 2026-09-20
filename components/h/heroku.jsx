import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv24h6bzq.css';

const viewBox = {"width":256,"height":284.4};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv24h6bzq"/>`,
		"fallback": "thesvg-color:heroku",
	});
}

export default Component;
