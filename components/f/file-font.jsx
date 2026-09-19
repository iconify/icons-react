import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs7-t7byx.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs7-t7byx"/>`,
		"fallback": "dinkie-icons:file-font",
	});
}

export default Component;
