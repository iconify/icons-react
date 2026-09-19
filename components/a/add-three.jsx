import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ieuaq8bzw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ieuaq8bzw"/>`,
		"fallback": "icon-park-outline:add-three",
	});
}

export default Component;
