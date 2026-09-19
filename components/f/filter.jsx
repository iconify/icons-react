import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ors6mho2l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ors6mho2l"/>`,
		"fallback": "icon-park-outline:filter",
	});
}

export default Component;
