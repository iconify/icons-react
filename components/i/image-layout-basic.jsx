import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgk9ozbah.css';
import '../../css/k/k79q3xboj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgk9ozbah"/><circle class="k79q3xboj"/>`,
		"fallback": "ooui:image-layout-basic",
	});
}

export default Component;
