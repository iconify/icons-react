import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow69e3v_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow69e3v_w"/>`,
		"fallback": "lets-icons:arrow-top-light",
	});
}

export default Component;
