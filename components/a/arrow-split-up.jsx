import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tffw4rreh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tffw4rreh"/>`,
		"fallback": "griddy-icons:arrow-split-up",
	});
}

export default Component;
