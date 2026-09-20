import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-06obvoh.css';
import '../../css/c/co-hgrdtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-06obvoh"/><path class="co-hgrdtw"/>`,
		"fallback": "mingcute:fried-egg-line",
	});
}

export default Component;
