import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev6n-jcqk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev6n-jcqk"/>`,
		"fallback": "octicon:accessibility-inset-16",
	});
}

export default Component;
