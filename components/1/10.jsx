import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmxbay76f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmxbay76f"/>`,
		"fallback": "pinhead:10",
	});
}

export default Component;
