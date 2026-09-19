import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0s--2bfe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0s--2bfe"/>`,
		"fallback": "icomoon-free:confused",
	});
}

export default Component;
