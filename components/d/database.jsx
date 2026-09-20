import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nixdnt-qy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nixdnt-qy"/>`,
		"fallback": "keyline-icons:database",
	});
}

export default Component;
