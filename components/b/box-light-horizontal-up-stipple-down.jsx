import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa2ueoszy.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa2ueoszy"/>`,
		"fallback": "memory:box-light-horizontal-up-stipple-down",
	});
}

export default Component;
