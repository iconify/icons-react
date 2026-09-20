import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3jd1lb0p.css';
import '../../css/u/uoxnjgbje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3jd1lb0p"/><path class="uoxnjgbje"/>`,
		"fallback": "octicon:graph-bar-horizontal-24",
	});
}

export default Component;
