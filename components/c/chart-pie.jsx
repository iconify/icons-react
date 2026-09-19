import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8fs50_cg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8fs50_cg"/>`,
		"fallback": "ci:chart-pie",
	});
}

export default Component;
