import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g947x_bkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g947x_bkx"/>`,
		"fallback": "reicon:exit-fullscreen-filled",
	});
}

export default Component;
