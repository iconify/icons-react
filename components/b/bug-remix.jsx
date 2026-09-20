import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6j7f0r3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v6j7f0r3d"/>`,
		"fallback": "streamline-sharp:bug-remix",
	});
}

export default Component;
