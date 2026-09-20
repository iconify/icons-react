import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvyztpgpx.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvyztpgpx"/>`,
		"fallback": "memory:box-outer-light-down-stipple",
	});
}

export default Component;
