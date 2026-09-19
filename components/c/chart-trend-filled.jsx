import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5fi-nhgh.css';
import '../../css/s/s8x-bmb6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5fi-nhgh"/><path class="s8x-bmb6i"/>`,
		"fallback": "boxicons:chart-trend-filled",
	});
}

export default Component;
