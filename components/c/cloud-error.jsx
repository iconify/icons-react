import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uu4-uvb1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uu4-uvb1m"/>`,
		"fallback": "iconoir:cloud-error",
	});
}

export default Component;
