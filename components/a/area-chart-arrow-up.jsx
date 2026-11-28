import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzjpn6b8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzjpn6b8f"/>`,
		"fallback": "noviair:area-chart-arrow-up",
	});
}

export default Component;
