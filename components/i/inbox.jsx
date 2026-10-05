import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/ahwwib73h.css';
import '../../css/e/ey--oyc_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="ahwwib73h"/><path class="ey--oyc_n"/></g>`,
		"fallback": "matita:inbox",
	});
}

export default Component;
