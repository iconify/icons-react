import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvg6edodd.css';
import '../../css/d/d9an_9pbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvg6edodd secondary"/><path class="d9an_9pbc primary"/>`,
		"fallback": "iconaut:infinity-duo",
	});
}

export default Component;
