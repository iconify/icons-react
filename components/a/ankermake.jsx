import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htc8-3ocq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htc8-3ocq"/>`,
		"fallback": "simple-icons:ankermake",
	});
}

export default Component;
