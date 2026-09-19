import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj5q7kbzd.css';
import '../../css/n/nabjh0sde.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj5q7kbzd"/><path class="nabjh0sde"/>`,
		"fallback": "ion:eye-off-sharp",
	});
}

export default Component;
