import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijj-5e42m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijj-5e42m"/>`,
		"fallback": "fontisto:arrow-v",
	});
}

export default Component;
