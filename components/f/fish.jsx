import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7sh_2rdz.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7sh_2rdz"/>`,
		"fallback": "picon:fish",
	});
}

export default Component;
