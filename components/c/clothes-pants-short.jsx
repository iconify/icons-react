import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui2tq9n4l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ui2tq9n4l"/>`,
		"fallback": "icon-park-outline:clothes-pants-short",
	});
}

export default Component;
