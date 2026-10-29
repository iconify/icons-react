import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f_zax55ru.css';
import '../../css/r/rf_o9fs4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="f_zax55ru"/><path class="rf_o9fs4s wm-a"/></g>`,
		"fallback": "withicons:align-bottom-solid",
	});
}

export default Component;
