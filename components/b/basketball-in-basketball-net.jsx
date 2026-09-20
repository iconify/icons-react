import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8b7rebts.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8b7rebts"/>`,
		"fallback": "pinhead:basketball-in-basketball-net",
	});
}

export default Component;
