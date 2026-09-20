import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xob65pb8a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xob65pb8a"/>`,
		"fallback": "pinhead:flash-camera",
	});
}

export default Component;
