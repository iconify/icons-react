import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e00xolbam.css';
import '../../css/x/xvaitzb7b.css';
import '../../css/x/xympf5b4o.css';
import '../../css/d/dikinyb7k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e00xolbam"/><path class="xvaitzb7b"/><path class="xympf5b4o"/><path class="dikinyb7k"/>`,
		"fallback": "selfhst:crafty-controller",
	});
}

export default Component;
