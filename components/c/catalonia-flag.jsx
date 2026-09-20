import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dur0b2p3t.css';
import '../../css/n/n_h3l4baj.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dur0b2p3t"/><path class="n_h3l4baj"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:catalonia-flag",
	});
}

export default Component;
