import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s80000qbg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s80000qbg"/>`,
		"fallback": "temaki:geyser-from-ground",
	});
}

export default Component;
