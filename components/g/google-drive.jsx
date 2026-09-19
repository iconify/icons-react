import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2i3shp5v.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2i3shp5v"/>`,
		"fallback": "fa7-brands:google-drive",
	});
}

export default Component;
