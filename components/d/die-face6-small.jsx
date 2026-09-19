import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmh2ek7ud.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmh2ek7ud"/>`,
		"fallback": "dinkie-icons:die-face6-small",
	});
}

export default Component;
