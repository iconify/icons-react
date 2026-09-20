import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmw_nynco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmw_nynco"/>`,
		"fallback": "reicon:airplane-filled",
	});
}

export default Component;
