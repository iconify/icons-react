import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy7mlyd3q.css';
import '../../css/i/iet5dccbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary sy7mlyd3q"/><path class="iet5dccbc primary"/>`,
		"fallback": "iconaut:health-cross-duo",
	});
}

export default Component;
