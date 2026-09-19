import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wezx3bbsv.css';
import '../../css/j/j14wpibjz.css';
import '../../css/w/wv5glxoac.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wezx3bbsv"/><path class="j14wpibjz"/><path class="wv5glxoac"/>`,
		"fallback": "ion:compose",
	});
}

export default Component;
