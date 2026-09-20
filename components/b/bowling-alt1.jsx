import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwn4y6b1b.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwn4y6b1b"/>`,
		"fallback": "temaki:bowling-alt1",
	});
}

export default Component;
