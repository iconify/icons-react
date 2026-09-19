import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4dpjs72k.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4dpjs72k"/>`,
		"fallback": "dinkie-icons:girl-small-filled",
	});
}

export default Component;
