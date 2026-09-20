import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8cxt48ie.css';
import '../../css/l/lx7mkia0m.css';
import '../../css/t/tsvbfvbzz.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8cxt48ie"/><path class="lx7mkia0m"/><path class="tsvbfvbzz"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-madagascar",
	});
}

export default Component;
