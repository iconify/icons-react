import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyt5_xbfr.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyt5_xbfr"/>`,
		"fallback": "memory:box-light-vertical-right-stipple-down-right",
	});
}

export default Component;
