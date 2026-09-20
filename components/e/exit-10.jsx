import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq35ehzop.css';

const viewBox = {"width":10,"height":10};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq35ehzop"/>`,
		"fallback": "osmic:exit-10",
	});
}

export default Component;
