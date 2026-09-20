import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1ym0rb9g.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l1ym0rb9g"/>`,
		"fallback": "lineicons:brush-1-rotated",
	});
}

export default Component;
