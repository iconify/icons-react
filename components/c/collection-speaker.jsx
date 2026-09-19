import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1v1gjlxg.css';

const viewBox = {"width":344,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1v1gjlxg"/>`,
		"fallback": "zmdi:collection-speaker",
	});
}

export default Component;
