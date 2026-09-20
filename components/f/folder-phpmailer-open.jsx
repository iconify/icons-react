import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yasv75-0z.css';
import '../../css/o/o1kvkvbiz.css';
import '../../css/n/n2y8m9bnx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yasv75-0z"/><path class="o1kvkvbiz"/><path class="n2y8m9bnx"/>`,
		"fallback": "material-icon-theme:folder-phpmailer-open",
	});
}

export default Component;
