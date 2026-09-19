import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnn8ur9fy.css';
import '../../css/a/a994n00sl.css';
import '../../css/o/ofu1v7x0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnn8ur9fy"/><path class="a994n00sl"/><path class="ofu1v7x0q"/>`,
		"fallback": "cbi:honda-motorcycles",
	});
}

export default Component;
