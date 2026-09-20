import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn62dvbtd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn62dvbtd"/>`,
		"fallback": "lsicon:check-correct-outline",
	});
}

export default Component;
