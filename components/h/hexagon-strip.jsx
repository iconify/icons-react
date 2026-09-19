import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug21vkosq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug21vkosq"/>`,
		"fallback": "icon-park-solid:hexagon-strip",
	});
}

export default Component;
