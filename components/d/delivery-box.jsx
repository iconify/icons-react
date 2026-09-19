import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayjdq7bud.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayjdq7bud"/>`,
		"fallback": "at-icons:delivery-box",
	});
}

export default Component;
