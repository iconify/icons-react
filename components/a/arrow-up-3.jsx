import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbv_7acjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbv_7acjb"/>`,
		"fallback": "reicon:arrow-up-3",
	});
}

export default Component;
