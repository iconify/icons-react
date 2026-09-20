import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul6ql98hj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ul6ql98hj"/>`,
		"fallback": "lucide:anvil",
	});
}

export default Component;
