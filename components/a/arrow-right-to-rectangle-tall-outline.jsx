import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abjqn5hlt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abjqn5hlt"/>`,
		"fallback": "pinhead:arrow-right-to-rectangle-tall-outline",
	});
}

export default Component;
