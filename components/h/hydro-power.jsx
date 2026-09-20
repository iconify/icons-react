import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpy3xnbch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpy3xnbch"/>`,
		"fallback": "mdi:hydro-power",
	});
}

export default Component;
