import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzobl5bag.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzobl5bag"/>`,
		"fallback": "fa6-solid:crop-simple",
	});
}

export default Component;
