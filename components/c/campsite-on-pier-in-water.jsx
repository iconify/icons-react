import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo1qmrsci.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo1qmrsci"/>`,
		"fallback": "pinhead:campsite-on-pier-in-water",
	});
}

export default Component;
