import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_r4um0nm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_r4um0nm"/>`,
		"fallback": "fontisto:eject",
	});
}

export default Component;
