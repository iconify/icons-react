import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bumebccge.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bumebccge"/>`,
		"fallback": "pinhead:arrow-right-above-arrow-left",
	});
}

export default Component;
