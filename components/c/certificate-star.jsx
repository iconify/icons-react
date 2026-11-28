import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt82v1dak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt82v1dak"/>`,
		"fallback": "noviair:certificate-star",
	});
}

export default Component;
