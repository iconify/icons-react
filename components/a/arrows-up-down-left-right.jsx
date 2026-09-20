import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lo-7ywbyu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lo-7ywbyu"/>`,
		"fallback": "pinhead:arrows-up-down-left-right",
	});
}

export default Component;
