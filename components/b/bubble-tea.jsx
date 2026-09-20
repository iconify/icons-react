import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnl6k-emx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnl6k-emx"/>`,
		"fallback": "temaki:bubble-tea",
	});
}

export default Component;
