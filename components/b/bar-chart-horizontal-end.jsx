import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sufc7bcoc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sufc7bcoc"/>`,
		"fallback": "keyline-icons:bar-chart-horizontal-end",
	});
}

export default Component;
