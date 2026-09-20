import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chmdl0b7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chmdl0b7x"/>`,
		"fallback": "tdesign:castle-3-filled",
	});
}

export default Component;
