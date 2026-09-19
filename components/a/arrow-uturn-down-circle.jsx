import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-c0dbbxi.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-c0dbbxi"/>`,
		"fallback": "f7:arrow-uturn-down-circle",
	});
}

export default Component;
