import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvk1p8bhd.css';

const viewBox = {"width":1025,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvk1p8bhd"/>`,
		"fallback": "whh:addfolderalt",
	});
}

export default Component;
