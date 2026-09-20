import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgnmve-ne.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgnmve-ne"/>`,
		"fallback": "la:chevron-circle-up-solid",
	});
}

export default Component;
