import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwnx8bzkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwnx8bzkx"/>`,
		"fallback": "tabler:alphabet-ethiopic",
	});
}

export default Component;
