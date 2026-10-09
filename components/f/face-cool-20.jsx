import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/t/tb4o58eqn.css';
import '../../css/z/z47m5z0qt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="tb4o58eqn"/><path class="z47m5z0qt"/>`,
		"fallback": "energy-icons:face-cool-20",
	});
}

export default Component;
