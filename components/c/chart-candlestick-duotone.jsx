import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz29mwb_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz29mwb_w primary"/>`,
		"fallback": "iconaut:chart-candlestick-duotone",
	});
}

export default Component;
