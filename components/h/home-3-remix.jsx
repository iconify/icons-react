import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywmnq8s9i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ywmnq8s9i"/>`,
		"fallback": "streamline:home-3-remix",
	});
}

export default Component;
