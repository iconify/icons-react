import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxk2rigpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxk2rigpf"/>`,
		"fallback": "keyline-icons:circle-chevron-up-fill",
	});
}

export default Component;
