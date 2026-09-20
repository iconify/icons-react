import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zar7pmbim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zar7pmbim"/>`,
		"fallback": "thesvg:cisco",
	});
}

export default Component;
