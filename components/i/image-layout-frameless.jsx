import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6s6g16ad.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6s6g16ad"/>`,
		"fallback": "ooui:image-layout-frameless",
	});
}

export default Component;
