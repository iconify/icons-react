import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbvq0z1dg.css';

const viewBox = {"width":640,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbvq0z1dg"/>`,
		"fallback": "whh:chevronright",
	});
}

export default Component;
