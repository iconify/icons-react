import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi7-sob6y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gi7-sob6y"/>`,
		"fallback": "pinhead:campsite-with-baht",
	});
}

export default Component;
