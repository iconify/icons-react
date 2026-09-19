import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfdlwqbnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfdlwqbnd"/>`,
		"fallback": "guidance:changin-room-disabled",
	});
}

export default Component;
