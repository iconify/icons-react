import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3byvac3h.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3byvac3h"/>`,
		"fallback": "map:embassy",
	});
}

export default Component;
