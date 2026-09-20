import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpvv030jk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpvv030jk"/>`,
		"fallback": "ri:arrow-right-up-line",
	});
}

export default Component;
