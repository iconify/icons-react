import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzi8fwb-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzi8fwb-k"/>`,
		"fallback": "bxs:archive",
	});
}

export default Component;
