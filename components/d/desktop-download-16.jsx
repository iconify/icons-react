import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjfl23hqz.css';
import '../../css/i/i2hb8p_7k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjfl23hqz"/><path class="i2hb8p_7k"/>`,
		"fallback": "octicon:desktop-download-16",
	});
}

export default Component;
