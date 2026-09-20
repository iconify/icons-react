import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow0agqb6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ow0agqb6i"/>`,
		"fallback": "keyline-icons:circle-alert-fill",
	});
}

export default Component;
