import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmf0e302q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmf0e302q"/>`,
		"fallback": "icon-park-outline:game-two",
	});
}

export default Component;
