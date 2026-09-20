import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfcgv9bxo.css';
import '../../css/u/ugg30ccps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfcgv9bxo"/><path class="ugg30ccps"/>`,
		"fallback": "token:alpha",
	});
}

export default Component;
