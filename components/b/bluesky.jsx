import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmax83b6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmax83b6b"/>`,
		"fallback": "meteor-icons:bluesky",
	});
}

export default Component;
