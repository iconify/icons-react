import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ide58leqh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ide58leqh"/>`,
		"fallback": "roentgen:diving-3-platforms",
	});
}

export default Component;
