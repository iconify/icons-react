import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4qlwu49w.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4qlwu49w"/>`,
		"fallback": "memory:box-light-double-horizontal-light-up",
	});
}

export default Component;
