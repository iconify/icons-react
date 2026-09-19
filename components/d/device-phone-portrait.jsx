import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myc39_jik.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myc39_jik"/>`,
		"fallback": "f7:device-phone-portrait",
	});
}

export default Component;
