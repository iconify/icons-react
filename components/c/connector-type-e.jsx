import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p47sh4b8i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p47sh4b8i"/>`,
		"fallback": "roentgen:connector-type-e",
	});
}

export default Component;
