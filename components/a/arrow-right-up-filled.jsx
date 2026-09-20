import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s99a_kb_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s99a_kb_c"/>`,
		"fallback": "reicon:arrow-right-up-filled",
	});
}

export default Component;
