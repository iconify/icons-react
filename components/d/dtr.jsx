import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kpi2fzh0j.css';
import '../../css/b/b0h_shk9a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="kpi2fzh0j"/><path class="b0h_shk9a"/></g>`,
		"fallback": "cryptocurrency:dtr",
	});
}

export default Component;
