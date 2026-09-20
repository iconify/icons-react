import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkea-vjte.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkea-vjte"/>`,
		"fallback": "roentgen:car-key",
	});
}

export default Component;
