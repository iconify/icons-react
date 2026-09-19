import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shpzc8bzi.css';
import '../../css/e/eh3ot8boa.css';
import '../../css/y/y2zsi2bct.css';
import '../../css/f/f5mb6fbcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shpzc8bzi"/><path class="eh3ot8boa"/><path class="y2zsi2bct"/><path class="f5mb6fbcb"/>`,
		"fallback": "bx:bxl-chrome",
	});
}

export default Component;
