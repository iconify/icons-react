import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi8ft_b3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi8ft_b3g"/>`,
		"fallback": "si:bar-chart-line",
	});
}

export default Component;
