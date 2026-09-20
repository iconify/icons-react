import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4ajofb5a.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4ajofb5a"/>`,
		"fallback": "memory:chevron-right-circle",
	});
}

export default Component;
