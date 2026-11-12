import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jiw71x5na.css';
import '../../css/d/dvmj74bcp.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jiw71x5na"/><path class="dvmj74bcp"/>`,
		"fallback": "devicon:dependabot",
	});
}

export default Component;
