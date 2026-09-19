import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6e4s3bwh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6e4s3bwh"/>`,
		"fallback": "game-icons:chanterelles",
	});
}

export default Component;
