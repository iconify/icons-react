import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg8tdmqjh.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg8tdmqjh"/>`,
		"fallback": "whh:cpanel",
	});
}

export default Component;
