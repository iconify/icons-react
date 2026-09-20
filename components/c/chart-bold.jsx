import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqef07b7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqef07b7f"/>`,
		"fallback": "solar:chart-bold",
	});
}

export default Component;
