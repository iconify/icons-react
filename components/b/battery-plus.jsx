import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n03oowbnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n03oowbnk"/>`,
		"fallback": "noviair-light:battery-plus",
	});
}

export default Component;
