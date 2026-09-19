import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8l94bcrq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8l94bcrq"/>`,
		"fallback": "icon-park-outline:four-leaves",
	});
}

export default Component;
