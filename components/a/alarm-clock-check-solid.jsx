import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tf3hozrsc.css';
import '../../css/b/bwvqb54kv.css';
import '../../css/u/u06ygo3ib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="tf3hozrsc"/><path class="bwvqb54kv wm-a"/><path class="u06ygo3ib wm-s"/></g>`,
		"fallback": "withicons:alarm-clock-check-solid",
	});
}

export default Component;
