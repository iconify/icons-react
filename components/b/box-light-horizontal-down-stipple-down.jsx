import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pewqf9b0b.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pewqf9b0b"/>`,
		"fallback": "memory:box-light-horizontal-down-stipple-down",
	});
}

export default Component;
