import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wordb69qu.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wordb69qu"/>`,
		"fallback": "fa-brands:imdb",
	});
}

export default Component;
