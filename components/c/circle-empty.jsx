import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzd0j5pdz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzd0j5pdz"/>`,
		"fallback": "roentgen:circle-empty",
	});
}

export default Component;
