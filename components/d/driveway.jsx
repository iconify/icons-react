import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9_2nwb4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9_2nwb4d"/>`,
		"fallback": "cbi:driveway",
	});
}

export default Component;
