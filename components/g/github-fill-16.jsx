import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/goo9ribrt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="goo9ribrt"/>`,
		"fallback": "garden:github-fill-16",
	});
}

export default Component;
