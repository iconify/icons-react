import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppzlhhbaa.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppzlhhbaa"/>`,
		"fallback": "memory:box-outer-light-down-vertical-stipple-left",
	});
}

export default Component;
