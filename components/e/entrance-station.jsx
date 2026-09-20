import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8fzmcbjm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8fzmcbjm"/>`,
		"fallback": "pinhead:entrance-station",
	});
}

export default Component;
