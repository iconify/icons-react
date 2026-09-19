import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnde1pb7z.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnde1pb7z"/>`,
		"fallback": "gis:gnss",
	});
}

export default Component;
