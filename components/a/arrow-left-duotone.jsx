import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8_ijmbtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary x8_ijmbtv"/>`,
		"fallback": "iconaut:arrow-left-duotone",
	});
}

export default Component;
