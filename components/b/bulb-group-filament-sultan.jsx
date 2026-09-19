import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqet__b7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqet__b7s"/>`,
		"fallback": "cbi:bulb-group-filament-sultan",
	});
}

export default Component;
