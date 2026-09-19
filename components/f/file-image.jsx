import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsy_2-b7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsy_2-b7b"/>`,
		"fallback": "bxs:file-image",
	});
}

export default Component;
