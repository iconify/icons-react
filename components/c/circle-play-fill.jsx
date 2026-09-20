import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybaas0b-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ybaas0b-s"/>`,
		"fallback": "keyline-icons:circle-play-fill",
	});
}

export default Component;
