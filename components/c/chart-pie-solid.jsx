import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyrq5gd4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyrq5gd4j"/>`,
		"fallback": "mynaui:chart-pie-solid",
	});
}

export default Component;
