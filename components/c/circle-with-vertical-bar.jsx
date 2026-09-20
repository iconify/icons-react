import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg7k6vike.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg7k6vike"/>`,
		"fallback": "pinhead:circle-with-vertical-bar",
	});
}

export default Component;
