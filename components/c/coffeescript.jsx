import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qoo1b6bww.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qoo1b6bww"/>`,
		"fallback": "cib:coffeescript",
	});
}

export default Component;
