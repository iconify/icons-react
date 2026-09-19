import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-qf5kd0x.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-qf5kd0x"/>`,
		"fallback": "whh:font",
	});
}

export default Component;
