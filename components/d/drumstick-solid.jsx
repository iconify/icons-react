import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/btt40q6yf.css';
import '../../css/g/grc51rbok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="btt40q6yf"/><path class="grc51rbok wm-a"/></g>`,
		"fallback": "withicons:drumstick-solid",
	});
}

export default Component;
