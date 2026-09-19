import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yefs43rzc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yefs43rzc"/>`,
		"fallback": "dinkie-icons:elevator-filled",
	});
}

export default Component;
