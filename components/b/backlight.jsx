import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ih7wdcbjt.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ih7wdcbjt"/>`,
		"fallback": "picon:backlight",
	});
}

export default Component;
