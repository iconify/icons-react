import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogv16_bqf.css';
import '../../css/d/djjdvpbpm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogv16_bqf"/><path class="djjdvpbpm"/>`,
		"fallback": "carbon:buoy",
	});
}

export default Component;
