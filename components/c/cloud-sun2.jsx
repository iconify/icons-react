import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rc24lzb5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rc24lzb5o"/>`,
		"fallback": "reicon:cloud-sun2",
	});
}

export default Component;
