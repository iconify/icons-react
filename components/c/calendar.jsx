import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrhh2bcxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrhh2bcxd"/>`,
		"fallback": "gridicons:calendar",
	});
}

export default Component;
