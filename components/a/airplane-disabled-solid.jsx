import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfcl9ekst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rfcl9ekst"/>`,
		"fallback": "streamline-sharp:airplane-disabled-solid",
	});
}

export default Component;
