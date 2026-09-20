import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie9q1cyqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie9q1cyqy"/>`,
		"fallback": "simple-icons:baremetrics",
	});
}

export default Component;
