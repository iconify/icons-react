import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls3gd3b9y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls3gd3b9y"/>`,
		"fallback": "icon-park-outline:h2",
	});
}

export default Component;
