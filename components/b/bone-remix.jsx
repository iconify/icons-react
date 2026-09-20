import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4wpjzb3a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4wpjzb3a"/>`,
		"fallback": "streamline:bone-remix",
	});
}

export default Component;
