import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it66n4bjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it66n4bjh"/>`,
		"fallback": "tabler:git-pull-request-closed",
	});
}

export default Component;
