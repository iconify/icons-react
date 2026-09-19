import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu1wy4b6g.css';
import '../../css/y/yuoo8p78p.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tu1wy4b6g"/><path class="yuoo8p78p"/>`,
		"fallback": "devicon:eleventy",
	});
}

export default Component;
