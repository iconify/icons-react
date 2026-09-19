import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycj6sccto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycj6sccto"/>`,
		"fallback": "humbleicons:arrows-up-down",
	});
}

export default Component;
