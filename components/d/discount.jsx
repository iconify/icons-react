import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by7gwpbho.css';
import '../../css/p/pnb1asb2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by7gwpbho duoicon-secondary-layer"/><path class="duoicon-primary-layer pnb1asb2o"/>`,
		"fallback": "duo-icons:discount",
	});
}

export default Component;
