import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1aqltbaz.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1aqltbaz"/>`,
		"fallback": "f7:exclamationmark-octagon-fill",
	});
}

export default Component;
