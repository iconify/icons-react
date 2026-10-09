import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y32oprfqe.css';
import '../../css/o/oquy5qb0l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y32oprfqe"/><path class="oquy5qb0l"/>`,
		"fallback": "energy-icons:ev-range-48",
	});
}

export default Component;
