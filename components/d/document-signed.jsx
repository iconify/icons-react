import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqhh-5byr.css';
import '../../css/x/xo26xfwgu.css';
import '../../css/p/pa6q0ccyu.css';
import '../../css/y/yefmyk4qs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqhh-5byr"/><circle class="xo26xfwgu"/><path class="pa6q0ccyu"/><path class="yefmyk4qs"/>`,
		"fallback": "carbon:document-signed",
	});
}

export default Component;
