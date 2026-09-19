import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dc3hpb0xb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dc3hpb0xb"/>`,
		"fallback": "grommet-icons:braille",
	});
}

export default Component;
