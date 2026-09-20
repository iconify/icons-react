import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwowx4blk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwowx4blk"/>`,
		"fallback": "pinhead:connecticut-with-capital-star",
	});
}

export default Component;
