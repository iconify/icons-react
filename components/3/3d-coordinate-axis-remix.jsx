import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-1leoezv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d-1leoezv"/>`,
		"fallback": "streamline-flex:3d-coordinate-axis-remix",
	});
}

export default Component;
