import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4ex10bfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g4ex10bfa"/>`,
		"fallback": "keyline-icons:clock-3-fill",
	});
}

export default Component;
