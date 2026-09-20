import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs51nf6pn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xs51nf6pn"/>`,
		"fallback": "solar:gamepad-old-bold",
	});
}

export default Component;
