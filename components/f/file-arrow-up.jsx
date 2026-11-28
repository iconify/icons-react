import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blyj3u2pc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blyj3u2pc"/>`,
		"fallback": "noviair:file-arrow-up",
	});
}

export default Component;
