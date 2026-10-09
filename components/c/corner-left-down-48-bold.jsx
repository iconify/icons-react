import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z87jsv16f.css';
import '../../css/g/gr2hwkk9e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z87jsv16f"/><path class="gr2hwkk9e"/>`,
		"fallback": "energy-icons:corner-left-down-48-bold",
	});
}

export default Component;
