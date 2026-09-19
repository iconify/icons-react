import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8__0mb4m.css';
import '../../css/b/bb_scruft.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8__0mb4m"/><path class="bb_scruft"/>`,
		"fallback": "icomoon-free:alarm",
	});
}

export default Component;
