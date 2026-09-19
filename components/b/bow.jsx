import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzoi8ll2q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzoi8ll2q"/>`,
		"fallback": "icon-park-outline:bow",
	});
}

export default Component;
