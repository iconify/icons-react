import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig19fbbld.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ig19fbbld"/>`,
		"fallback": "gis:help-larrow",
	});
}

export default Component;
