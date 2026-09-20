import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7l6k569g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7l6k569g"/>`,
		"fallback": "pinhead:bear-spray-can-with-spray-and-baht",
	});
}

export default Component;
