import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/higv-zb3q.css';
import '../../css/n/n1xy6nh9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="higv-zb3q"/><circle class="n1xy6nh9u"/>`,
		"fallback": "bxs:compass",
	});
}

export default Component;
