import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tt9zz1bdg.css';
import '../../css/k/k0w0kweqa.css';
import '../../css/j/j3bulgbev.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tt9zz1bdg"/><path class="k0w0kweqa"/><path class="j3bulgbev"/>`,
		"fallback": "energy-icons:drum-48-bold",
	});
}

export default Component;
