import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdcxh6dac.css';
import '../../css/r/rsf6pbc-s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdcxh6dac"/><path class="rsf6pbc-s"/>`,
		"fallback": "garden:bot-sparkle-fill-20",
	});
}

export default Component;
