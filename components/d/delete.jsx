import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgdtsgbcc.css';
import '../../css/v/vj4rr6bnv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgdtsgbcc"/><path class="vj4rr6bnv"/>`,
		"fallback": "carbon:delete",
	});
}

export default Component;
