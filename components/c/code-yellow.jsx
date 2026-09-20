import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9-0loj0c.css';
import '../../css/c/cl9-c2b3g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9-0loj0c"/><path class="cl9-c2b3g"/>`,
		"fallback": "meteocons:code-yellow",
	});
}

export default Component;
