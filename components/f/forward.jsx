import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd22b9x_l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd22b9x_l"/>`,
		"fallback": "icomoon-free:forward",
	});
}

export default Component;
