import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8cxt48ie.css';
import '../../css/p/pl__io_so.css';
import '../../css/l/lfiiz74nz.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8cxt48ie"/><path class="pl__io_so"/><path class="lfiiz74nz"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-cambodia",
	});
}

export default Component;
