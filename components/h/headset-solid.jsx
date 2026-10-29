import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/keg_p2rql.css';
import '../../css/p/pmx023bby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="keg_p2rql"/><path class="pmx023bby wm-a"/></g>`,
		"fallback": "withicons:headset-solid",
	});
}

export default Component;
