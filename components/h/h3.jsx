import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opy_qdyex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opy_qdyex"/>`,
		"fallback": "pixel:h3",
	});
}

export default Component;
