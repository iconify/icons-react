import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/me4ccrbix.css';
import '../../css/m/m64zk5bnj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="me4ccrbix"/><path class="m64zk5bnj"/></g>`,
		"fallback": "bi:box-arrow-in-up-left",
	});
}

export default Component;
