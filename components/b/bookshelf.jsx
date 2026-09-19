import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isvwyobao.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isvwyobao"/>`,
		"fallback": "icon-park-solid:bookshelf",
	});
}

export default Component;
