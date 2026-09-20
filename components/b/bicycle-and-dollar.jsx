import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvk_8sbkp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvk_8sbkp"/>`,
		"fallback": "pinhead:bicycle-and-dollar",
	});
}

export default Component;
