import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awqap13wx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awqap13wx"/>`,
		"fallback": "rivet-icons:arrow-down-right",
	});
}

export default Component;
