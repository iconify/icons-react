import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx_8t2b9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx_8t2b9j"/>`,
		"fallback": "thesvg-color:contabo",
	});
}

export default Component;
