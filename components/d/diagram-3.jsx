import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug-mjlbkx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug-mjlbkx"/>`,
		"fallback": "bi:diagram-3",
	});
}

export default Component;
