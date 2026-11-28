import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-iqofk3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-iqofk3s"/>`,
		"fallback": "noviair:bar-chart-horizontal",
	});
}

export default Component;
