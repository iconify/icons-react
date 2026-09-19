import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuu76q5df.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nuu76q5df"/>`,
		"fallback": "garden:folder-closed-fill-12",
	});
}

export default Component;
