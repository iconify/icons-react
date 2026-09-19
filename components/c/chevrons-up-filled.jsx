import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1qupzz3x.css';
import '../../css/t/tc13xdone.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1qupzz3x"/><path class="tc13xdone"/>`,
		"fallback": "boxicons:chevrons-up-filled",
	});
}

export default Component;
