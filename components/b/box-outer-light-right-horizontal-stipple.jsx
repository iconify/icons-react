import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iehuhwb2o.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iehuhwb2o"/>`,
		"fallback": "memory:box-outer-light-right-horizontal-stipple",
	});
}

export default Component;
