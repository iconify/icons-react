import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpcp248iu.css';
import '../../css/w/wp7bgyt0r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpcp248iu"/><path class="wp7bgyt0r"/>`,
		"fallback": "icomoon-free:coin-pound",
	});
}

export default Component;
