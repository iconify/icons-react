import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llko29bid.css';
import '../../css/a/a9_rmzbze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llko29bid"/><path class="a9_rmzbze"/>`,
		"fallback": "uim:html5-alt",
	});
}

export default Component;
