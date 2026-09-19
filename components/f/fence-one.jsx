import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjurojboq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjurojboq"/>`,
		"fallback": "icon-park-outline:fence-one",
	});
}

export default Component;
