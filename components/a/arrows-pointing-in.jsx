import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfomjtbhp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfomjtbhp"/>`,
		"fallback": "heroicons-solid:arrows-pointing-in",
	});
}

export default Component;
