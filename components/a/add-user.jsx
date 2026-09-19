import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz556xbly.css';

const viewBox = {"width":680,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz556xbly"/>`,
		"fallback": "il:add-user",
	});
}

export default Component;
