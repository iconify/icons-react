import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vouq7mimd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vouq7mimd"/>`,
		"fallback": "thesvg:box",
	});
}

export default Component;
