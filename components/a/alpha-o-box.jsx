import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwr8ainsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwr8ainsu"/>`,
		"fallback": "mdi:alpha-o-box",
	});
}

export default Component;
