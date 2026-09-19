import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvor92b2m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvor92b2m"/>`,
		"fallback": "icon-park-outline:block-three",
	});
}

export default Component;
