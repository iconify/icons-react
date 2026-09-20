import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhp0hry1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vhp0hry1j"/>`,
		"fallback": "stash:corner-up-left-duotone",
	});
}

export default Component;
