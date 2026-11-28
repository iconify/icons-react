import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmpinr99k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmpinr99k"/>`,
		"fallback": "noviair:cpu-gear",
	});
}

export default Component;
