import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tz_6x620o.css';

const viewBox = {"width":1728,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tz_6x620o"/>`,
		"fallback": "fa:get-pocket",
	});
}

export default Component;
