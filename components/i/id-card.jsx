import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovi425ott.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovi425ott"/>`,
		"fallback": "bxs:id-card",
	});
}

export default Component;
