import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myp90-ogc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myp90-ogc"/>`,
		"fallback": "la:hotdog-solid",
	});
}

export default Component;
