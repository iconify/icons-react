import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uws-23bsl.css';
import '../../css/d/d83mplq2z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uws-23bsl"/><path class="d83mplq2z"/>`,
		"fallback": "octicon:credit-card-16",
	});
}

export default Component;
