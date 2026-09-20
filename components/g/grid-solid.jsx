import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv95rv00s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dv95rv00s"/>`,
		"fallback": "rivet-icons:grid-solid",
	});
}

export default Component;
