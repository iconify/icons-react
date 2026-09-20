import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/refuwn1eq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="refuwn1eq"/>`,
		"fallback": "temaki:boat-dry-dock",
	});
}

export default Component;
