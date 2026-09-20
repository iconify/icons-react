import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynsie1h8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynsie1h8t"/>`,
		"fallback": "thesvg:c",
	});
}

export default Component;
