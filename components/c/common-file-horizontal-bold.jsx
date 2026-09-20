import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7_yf3hsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7_yf3hsh"/>`,
		"fallback": "streamline-ultimate:common-file-horizontal-bold",
	});
}

export default Component;
