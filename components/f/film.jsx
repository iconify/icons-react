import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtu8r877r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtu8r877r"/>`,
		"fallback": "icomoon-free:film",
	});
}

export default Component;
