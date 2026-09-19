import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnp-6j6hh.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnp-6j6hh"/>`,
		"fallback": "whh:clearformatting",
	});
}

export default Component;
