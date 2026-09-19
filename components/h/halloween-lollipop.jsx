import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5kounbif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5kounbif"/>`,
		"fallback": "griddy-icons:halloween-lollipop",
	});
}

export default Component;
