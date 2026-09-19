import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrhl2piks.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrhl2piks"/>`,
		"fallback": "bi:hourglass-split",
	});
}

export default Component;
