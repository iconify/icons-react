import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dur0b2p3t.css';
import '../../css/l/lk8duns4e.css';
import '../../css/q/qh9qlceui.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dur0b2p3t"/><path class="lk8duns4e"/><path class="qh9qlceui"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-colombia",
	});
}

export default Component;
