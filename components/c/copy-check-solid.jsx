import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ya_ti3b9f.css';
import '../../css/t/txfeqhb9y.css';
import '../../css/x/xsaz4lkzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ya_ti3b9f"/><path class="txfeqhb9y wm-a"/><path class="wm-s xsaz4lkzh"/></g>`,
		"fallback": "withicons:copy-check-solid",
	});
}

export default Component;
