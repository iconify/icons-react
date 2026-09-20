import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eckebzb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eckebzb_a"/>`,
		"fallback": "thesvg-color:crusoe",
	});
}

export default Component;
