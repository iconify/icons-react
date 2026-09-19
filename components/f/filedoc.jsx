import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btx7j3qro.css';
import '../../css/p/pfijng4-x.css';

const viewBox = {"width":15,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btx7j3qro"/><path class="pfijng4-x"/>`,
		"fallback": "formkit:filedoc",
	});
}

export default Component;
