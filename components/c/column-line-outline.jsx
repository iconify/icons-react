import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us_qw2b_n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us_qw2b_n"/>`,
		"fallback": "lsicon:column-line-outline",
	});
}

export default Component;
