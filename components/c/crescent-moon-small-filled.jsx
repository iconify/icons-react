import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-b3v2tyv.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-b3v2tyv"/>`,
		"fallback": "dinkie-icons:crescent-moon-small-filled",
	});
}

export default Component;
