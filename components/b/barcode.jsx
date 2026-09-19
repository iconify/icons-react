import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozxot9bve.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozxot9bve"/>`,
		"fallback": "icomoon-free:barcode",
	});
}

export default Component;
