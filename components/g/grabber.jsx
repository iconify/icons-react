import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo6ln3mqd.css';

const viewBox = {"width":8,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo6ln3mqd"/>`,
		"fallback": "octicon:grabber",
	});
}

export default Component;
