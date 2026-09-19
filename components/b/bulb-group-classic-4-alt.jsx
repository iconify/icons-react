import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcq0-gbrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcq0-gbrt"/>`,
		"fallback": "cbi:bulb-group-classic-4-alt",
	});
}

export default Component;
