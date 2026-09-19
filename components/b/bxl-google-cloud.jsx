import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzzx-pbcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzzx-pbcy"/>`,
		"fallback": "bx:bxl-google-cloud",
	});
}

export default Component;
