import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkwc33ays.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkwc33ays"/>`,
		"fallback": "icomoon-free:arrow-down-right2",
	});
}

export default Component;
