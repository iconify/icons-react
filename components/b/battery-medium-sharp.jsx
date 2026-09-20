import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mljm37bxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mljm37bxv"/>`,
		"fallback": "pixelarticons:battery-medium-sharp",
	});
}

export default Component;
