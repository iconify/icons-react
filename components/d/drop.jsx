import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecktfepqc.css';
import '../../css/q/qd7nioben.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecktfepqc"/><path class="qd7nioben"/>`,
		"fallback": "nimbus:drop",
	});
}

export default Component;
