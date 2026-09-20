import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ha_v22dby.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ha_v22dby"/>`,
		"fallback": "octicon:git-compare-16",
	});
}

export default Component;
