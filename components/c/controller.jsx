import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na2xregyc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="na2xregyc"/>`,
		"fallback": "at-icons:controller",
	});
}

export default Component;
