import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3dgaob_q.css';
import '../../css/x/xx4upobit.css';
import '../../css/b/b6ueueufz.css';
import '../../css/n/nvorv_bgg.css';
import '../../css/e/e7e7wmxcn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3dgaob_q"/><circle class="xx4upobit"/><circle class="b6ueueufz"/><circle class="nvorv_bgg"/><path class="e7e7wmxcn"/>`,
		"fallback": "carbon:data-check",
	});
}

export default Component;
