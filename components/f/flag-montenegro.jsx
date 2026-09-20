import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8cxt48ie.css';
import '../../css/o/ow5tq3ndf.css';
import '../../css/l/ls92tot9h.css';
import '../../css/g/g0ojxrcrz.css';
import '../../css/j/j8-blibdk.css';
import '../../css/f/fwoblxbmv.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8cxt48ie"/><path class="ow5tq3ndf"/><path class="ls92tot9h"/><path class="g0ojxrcrz"/><path class="j8-blibdk"/><path class="fwoblxbmv"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-montenegro",
	});
}

export default Component;
