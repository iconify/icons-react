import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7csbubqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z7csbubqo"/>`,
		"fallback": "keyline-icons:clock-5-fill",
	});
}

export default Component;
