import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvk04dbqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvk04dbqo"/>`,
		"fallback": "tabler:arrows-move-vertical",
	});
}

export default Component;
