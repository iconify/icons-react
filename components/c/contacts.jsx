import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/y/yqzgd_r2w.css';
import '../../css/n/n9pgd6bqy.css';
import '../../css/c/c8-_myblp.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(3 3)" class="jtowsomii"><circle class="yqzgd_r2w"/><path class="n9pgd6bqy"/><path class="c8-_myblp"/></g>`,
		"fallback": "system-uicons:contacts",
	});
}

export default Component;
