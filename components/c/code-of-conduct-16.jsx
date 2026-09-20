import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-od26b1r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-od26b1r"/>`,
		"fallback": "octicon:code-of-conduct-16",
	});
}

export default Component;
