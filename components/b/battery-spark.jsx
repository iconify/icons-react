import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdldd8buu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdldd8buu"/>`,
		"fallback": "tabler:battery-spark",
	});
}

export default Component;
