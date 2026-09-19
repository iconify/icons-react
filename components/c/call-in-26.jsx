import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-b_zxyms.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-b_zxyms"/>`,
		"fallback": "garden:call-in-26",
	});
}

export default Component;
