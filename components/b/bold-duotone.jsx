import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibja0x6pk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibja0x6pk primary"/>`,
		"fallback": "iconaut:bold-duotone",
	});
}

export default Component;
