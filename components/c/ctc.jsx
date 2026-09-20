import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4_6otcrb.css';
import '../../css/s/sy_8ez57r.css';
import '../../css/w/wji-c-ehd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4_6otcrb"/><path class="sy_8ez57r"/><path class="wji-c-ehd"/>`,
		"fallback": "token:ctc",
	});
}

export default Component;
