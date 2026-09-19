import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufjhs5b8y.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufjhs5b8y"/>`,
		"fallback": "garden:clipboard-26",
	});
}

export default Component;
