import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mum8h13xe.css';
import '../../css/l/lr5p17fsb.css';
import '../../css/s/s3rtijlqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mum8h13xe"/><path class="lr5p17fsb"/><path class="s3rtijlqj"/></g>`,
		"fallback": "hugeicons:camera-03",
	});
}

export default Component;
