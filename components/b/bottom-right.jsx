import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu1f9cb1q.css';
import '../../css/e/ebmyan6qe.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu1f9cb1q"/><path class="ebmyan6qe"/>`,
		"fallback": "ep:bottom-right",
	});
}

export default Component;
