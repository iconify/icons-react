import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c525gmbvw.css';

const viewBox = {"width":554,"height":137};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c525gmbvw"/>`,
		"fallback": "thesvg-color:espn",
	});
}

export default Component;
