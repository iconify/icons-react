import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u218tr9hm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u218tr9hm"/>`,
		"fallback": "icon-park-outline:come",
	});
}

export default Component;
