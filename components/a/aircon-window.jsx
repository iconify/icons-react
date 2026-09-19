import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl8v2zbsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl8v2zbsa"/>`,
		"fallback": "cbi:aircon-window",
	});
}

export default Component;
