import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyc9zmnvx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyc9zmnvx"/>`,
		"fallback": "temaki:buffer-stop",
	});
}

export default Component;
