import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf-c6_b8l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pf-c6_b8l"/>`,
		"fallback": "lsicon:density-s-filled",
	});
}

export default Component;
