import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9qpo1b2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9qpo1b2o"/>`,
		"fallback": "coolicons:cloud-fill-round",
	});
}

export default Component;
