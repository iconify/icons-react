import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufnv-ab8g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufnv-ab8g"/>`,
		"fallback": "pinhead:canoe-on-sedan",
	});
}

export default Component;
