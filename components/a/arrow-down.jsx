import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt-2bgb2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt-2bgb2n"/>`,
		"fallback": "gg:arrow-down",
	});
}

export default Component;
