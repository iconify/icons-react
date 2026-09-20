import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upq_uz6fh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upq_uz6fh"/>`,
		"fallback": "meteor-icons:align-justify",
	});
}

export default Component;
