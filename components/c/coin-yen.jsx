import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpcp248iu.css';
import '../../css/w/wt-ac1bhr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpcp248iu"/><path class="wt-ac1bhr"/>`,
		"fallback": "icomoon-free:coin-yen",
	});
}

export default Component;
