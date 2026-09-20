import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlgd_zbki.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlgd_zbki"/>`,
		"fallback": "rivet-icons:headphones-solid",
	});
}

export default Component;
