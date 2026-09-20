import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8mohmb0l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8mohmb0l"/>`,
		"fallback": "pinhead:dagger",
	});
}

export default Component;
