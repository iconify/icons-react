import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwyxdm3le.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwyxdm3le"/>`,
		"fallback": "pinhead:classical-building-with-dome-and-flag",
	});
}

export default Component;
