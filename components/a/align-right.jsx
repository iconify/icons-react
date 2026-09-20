import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk-ngov9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk-ngov9p"/>`,
		"fallback": "pixel:align-right",
	});
}

export default Component;
