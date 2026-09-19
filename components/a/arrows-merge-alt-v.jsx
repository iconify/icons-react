import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m79vori4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m79vori4k"/>`,
		"fallback": "gg:arrows-merge-alt-v",
	});
}

export default Component;
