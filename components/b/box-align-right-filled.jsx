import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbnp4i9in.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbnp4i9in"/>`,
		"fallback": "tabler:box-align-right-filled",
	});
}

export default Component;
