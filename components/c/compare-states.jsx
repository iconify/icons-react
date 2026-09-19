import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnoirdb7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnoirdb7i"/>`,
		"fallback": "eos-icons:compare-states",
	});
}

export default Component;
