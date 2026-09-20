import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsun6_jdx.css';
import '../../css/i/igyvn5baq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsun6_jdx"/><path class="igyvn5baq"/>`,
		"fallback": "token:bcd",
	});
}

export default Component;
