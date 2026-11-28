import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz4u5db2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz4u5db2o"/>`,
		"fallback": "noviair-light:arrow-circle-left",
	});
}

export default Component;
