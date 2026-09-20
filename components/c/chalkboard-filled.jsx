import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqudf_bri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iqudf_bri"/>`,
		"fallback": "reicon:chalkboard-filled",
	});
}

export default Component;
