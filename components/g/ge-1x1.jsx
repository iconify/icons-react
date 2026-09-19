import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erzf03bmv.css';
import '../../css/t/t7gwqghcs.css';
import '../../css/w/wq7u60b_p.css';
import '../../css/w/w7xf5tl0z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erzf03bmv"/><path class="t7gwqghcs"/><path class="wq7u60b_p"/><path class="w7xf5tl0z"/>`,
		"fallback": "flag:ge-1x1",
	});
}

export default Component;
