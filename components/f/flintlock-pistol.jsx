import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_d9kjclj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_d9kjclj"/>`,
		"fallback": "pinhead:flintlock-pistol",
	});
}

export default Component;
