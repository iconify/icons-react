import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdu7zo3md.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdu7zo3md"/>`,
		"fallback": "pinhead:giftwrapped-box-and-tag",
	});
}

export default Component;
