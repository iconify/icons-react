import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw9m3wb5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw9m3wb5a"/>`,
		"fallback": "tdesign:arrow-down",
	});
}

export default Component;
