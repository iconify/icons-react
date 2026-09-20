import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahe8wbc_h.css';
import '../../css/i/i0j6qobio.css';
import '../../css/j/j10_cbcvm.css';
import '../../css/i/iuyj0-wdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahe8wbc_h"/><path class="i0j6qobio"/><path class="j10_cbcvm"/><path class="iuyj0-wdq"/>`,
		"fallback": "token:edu",
	});
}

export default Component;
