import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-77o_bfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-77o_bfc"/>`,
		"fallback": "reicon:forward-square-filled",
	});
}

export default Component;
