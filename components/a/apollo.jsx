import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc3padctm.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bc3padctm"/>`,
		"fallback": "file-icons:apollo",
	});
}

export default Component;
