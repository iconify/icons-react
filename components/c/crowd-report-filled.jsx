import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws9aemb-h.css';
import '../../css/m/mkjrunb1f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ws9aemb-h"/><path class="mkjrunb1f"/>`,
		"fallback": "carbon:crowd-report-filled",
	});
}

export default Component;
