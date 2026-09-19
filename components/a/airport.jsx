import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hse_63wgt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hse_63wgt"/>`,
		"fallback": "icons8:airport",
	});
}

export default Component;
