import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhp8hdctn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhp8hdctn"/>`,
		"fallback": "octicon:apps-16",
	});
}

export default Component;
