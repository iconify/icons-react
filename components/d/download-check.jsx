import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdk7-cbak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdk7-cbak"/>`,
		"fallback": "noviair:download-check",
	});
}

export default Component;
