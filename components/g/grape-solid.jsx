import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/znmtl4goj.css';
import '../../css/g/giszstb0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="znmtl4goj"/><path class="giszstb0o wm-a"/></g>`,
		"fallback": "withicons:grape-solid",
	});
}

export default Component;
