import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhw1qnbbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhw1qnbbv"/>`,
		"fallback": "ri:blogger-fill",
	});
}

export default Component;
