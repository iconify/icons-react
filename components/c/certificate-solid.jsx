import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/un6alvb9t.css';
import '../../css/m/ml4jm-bfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="un6alvb9t"/><path class="ml4jm-bfl wm-a"/></g>`,
		"fallback": "withicons:certificate-solid",
	});
}

export default Component;
