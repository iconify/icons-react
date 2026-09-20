import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hffinzb2c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hffinzb2c"/>`,
		"fallback": "lsicon:density-s-outline",
	});
}

export default Component;
