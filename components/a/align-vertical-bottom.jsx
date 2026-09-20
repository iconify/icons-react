import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajvn4_1qw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajvn4_1qw"/>`,
		"fallback": "mdi:align-vertical-bottom",
	});
}

export default Component;
