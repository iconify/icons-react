import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz2y_fbvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz2y_fbvt"/>`,
		"fallback": "ri:game-fill",
	});
}

export default Component;
