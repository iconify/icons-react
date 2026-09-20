import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0c3qtbeq.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c0c3qtbeq"/>`,
		"fallback": "lineicons:bug-1",
	});
}

export default Component;
