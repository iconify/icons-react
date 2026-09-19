import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpd3nyb2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpd3nyb2c"/>`,
		"fallback": "ci:bar-chart-square",
	});
}

export default Component;
