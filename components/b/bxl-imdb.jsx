import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rllujjb-s.css';
import '../../css/n/n36fbt-7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rllujjb-s"/><path class="n36fbt-7o"/>`,
		"fallback": "bx:bxl-imdb",
	});
}

export default Component;
