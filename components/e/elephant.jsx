import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-62fle1w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-62fle1w"/>`,
		"fallback": "pinhead:elephant",
	});
}

export default Component;
