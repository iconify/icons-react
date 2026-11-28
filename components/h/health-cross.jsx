import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iet5dccbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iet5dccbc"/>`,
		"fallback": "iconaut:health-cross",
	});
}

export default Component;
