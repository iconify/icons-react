import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv8z7nfju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv8z7nfju"/>`,
		"fallback": "reicon:arrow-left3-filled",
	});
}

export default Component;
