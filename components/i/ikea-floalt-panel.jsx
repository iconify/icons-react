import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz4dern3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz4dern3g"/>`,
		"fallback": "cbi:ikea-floalt-panel",
	});
}

export default Component;
