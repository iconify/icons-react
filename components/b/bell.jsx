import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e24y9nbby.css';

const viewBox = {"width":15,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e24y9nbby"/>`,
		"fallback": "octicon:bell",
	});
}

export default Component;
