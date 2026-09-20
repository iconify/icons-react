import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnpz_eeaf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnpz_eeaf"/>`,
		"fallback": "rivet-icons:circle-solid",
	});
}

export default Component;
