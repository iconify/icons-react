import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5tyr8-bq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5tyr8-bq"/>`,
		"fallback": "noviair:forklift",
	});
}

export default Component;
