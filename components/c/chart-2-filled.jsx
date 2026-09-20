import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy6nsxr8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uy6nsxr8j"/>`,
		"fallback": "reicon:chart-2-filled",
	});
}

export default Component;
