import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/rphab9t6o.css';
import '../../css/p/ptw4gb0hs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="rphab9t6o"/><path class="ptw4gb0hs"/></g>`,
		"fallback": "matita:flag",
	});
}

export default Component;
