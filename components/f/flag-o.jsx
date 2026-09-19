import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf4lu5bhe.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf4lu5bhe"/>`,
		"fallback": "gis:flag-o",
	});
}

export default Component;
