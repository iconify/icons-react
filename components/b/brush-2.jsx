import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u48rs9bat.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u48rs9bat"/>`,
		"fallback": "lineicons:brush-2",
	});
}

export default Component;
