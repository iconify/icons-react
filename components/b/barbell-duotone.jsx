import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnp4-d4ot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary vnp4-d4ot"/>`,
		"fallback": "iconaut:barbell-duotone",
	});
}

export default Component;
