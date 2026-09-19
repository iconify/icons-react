import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdyb6n7ly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdyb6n7ly"/>`,
		"fallback": "boxicons:bar-chart-big",
	});
}

export default Component;
