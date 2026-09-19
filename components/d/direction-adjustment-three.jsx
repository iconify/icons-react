import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyy2bibww.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyy2bibww"/>`,
		"fallback": "icon-park-outline:direction-adjustment-three",
	});
}

export default Component;
