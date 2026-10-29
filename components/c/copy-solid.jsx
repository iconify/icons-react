import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v7f3w-bdm.css';
import '../../css/t/txfeqhb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="v7f3w-bdm"/><path class="txfeqhb9y wm-a"/></g>`,
		"fallback": "withicons:copy-solid",
	});
}

export default Component;
