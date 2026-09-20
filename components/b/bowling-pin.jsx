import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw3ccs95k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xw3ccs95k"/>`,
		"fallback": "pinhead:bowling-pin",
	});
}

export default Component;
