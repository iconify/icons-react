import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy1ra6i_n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy1ra6i_n"/>`,
		"fallback": "pinhead:arrows-top-left-bottom-right",
	});
}

export default Component;
