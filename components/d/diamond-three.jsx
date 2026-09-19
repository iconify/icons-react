import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg1jh-27v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg1jh-27v"/>`,
		"fallback": "icon-park-solid:diamond-three",
	});
}

export default Component;
