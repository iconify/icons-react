import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be9txbb6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="be9txbb6y"/>`,
		"fallback": "tabler:building-bridge",
	});
}

export default Component;
