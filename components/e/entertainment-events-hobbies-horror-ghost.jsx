import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il1_u-b0j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il1_u-b0j"/>`,
		"fallback": "streamline-pixel:entertainment-events-hobbies-horror-ghost",
	});
}

export default Component;
