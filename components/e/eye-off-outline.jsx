import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqg5a0bzs.css';
import '../../css/d/dzfumybez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqg5a0bzs"/><path class="dzfumybez"/>`,
		"fallback": "eva:eye-off-outline",
	});
}

export default Component;
