import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/neccxbbcy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="neccxbbcy"/>`,
		"fallback": "lsicon:hospital-outline",
	});
}

export default Component;
