import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pulfe0bbt.css';
import '../../css/o/oc_89sbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="pulfe0bbt"/><path class="oc_89sbdk wm-a"/></g>`,
		"fallback": "withicons:cricket-solid",
	});
}

export default Component;
