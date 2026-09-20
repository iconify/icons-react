import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwwi7ng6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwwi7ng6b"/>`,
		"fallback": "reicon:arrow-up4-filled",
	});
}

export default Component;
