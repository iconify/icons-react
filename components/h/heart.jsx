import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzw3sc8yo.css';

const viewBox = {"width":37,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzw3sc8yo"/>`,
		"fallback": "et:heart",
	});
}

export default Component;
