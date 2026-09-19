import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut1a-rj1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ut1a-rj1x"/>`,
		"fallback": "cbi:bulb-filament-alt",
	});
}

export default Component;
