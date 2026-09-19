import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfs6cib_d.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfs6cib_d"/>`,
		"fallback": "fa7-brands:foursquare",
	});
}

export default Component;
