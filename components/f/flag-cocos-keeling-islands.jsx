import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wism3vaym.css';
import '../../css/k/kox-6vbfo.css';
import '../../css/n/nwt6gabgu.css';
import '../../css/q/qp9xuq1ve.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wism3vaym"/><path class="kox-6vbfo"/><circle class="nwt6gabgu"/><path class="qp9xuq1ve"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-cocos-keeling-islands",
	});
}

export default Component;
