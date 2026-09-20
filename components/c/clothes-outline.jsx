import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx740u_sa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx740u_sa"/>`,
		"fallback": "lsicon:clothes-outline",
	});
}

export default Component;
