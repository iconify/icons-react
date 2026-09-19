import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsywa6bwc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsywa6bwc"/>`,
		"fallback": "bi:instagram",
	});
}

export default Component;
