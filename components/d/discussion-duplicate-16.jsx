import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m90r2bo5t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m90r2bo5t"/>`,
		"fallback": "octicon:discussion-duplicate-16",
	});
}

export default Component;
