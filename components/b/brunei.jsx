import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9hw04gtb.css';
import '../../css/j/j5ncyysyc.css';
import '../../css/e/ea3jqeb9u.css';
import '../../css/a/adtv22bjo.css';
import '../../css/h/h1cex349q.css';
import '../../css/l/l5xqjwbxk.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9hw04gtb"/><path class="j5ncyysyc"/><path class="ea3jqeb9u"/><path class="adtv22bjo"/><path class="h1cex349q"/><path class="l5xqjwbxk"/>`,
		"fallback": "tabler-flags:brunei",
	});
}

export default Component;
