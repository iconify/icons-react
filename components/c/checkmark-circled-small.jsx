import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1vnqjkpg.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1vnqjkpg"/>`,
		"fallback": "dinkie-icons:checkmark-circled-small",
	});
}

export default Component;
