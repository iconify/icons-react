import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4tx97b7q.css';
import '../../css/x/x-ff3h11f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4tx97b7q"/><circle class="x-ff3h11f"/>`,
		"fallback": "famicons:alert-outline",
	});
}

export default Component;
