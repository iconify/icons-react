import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at8sxj1ut.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="at8sxj1ut"/>`,
		"fallback": "roentgen:aseptic-carton",
	});
}

export default Component;
