import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl91ypb0k.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl91ypb0k"/>`,
		"fallback": "maki:aerialway-11",
	});
}

export default Component;
