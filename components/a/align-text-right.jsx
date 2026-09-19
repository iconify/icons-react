import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb-7oac9o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb-7oac9o"/>`,
		"fallback": "icon-park-outline:align-text-right",
	});
}

export default Component;
