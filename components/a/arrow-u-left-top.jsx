import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njmoeib8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njmoeib8s"/>`,
		"fallback": "mdi:arrow-u-left-top",
	});
}

export default Component;
