import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc25tg1zz.css';
import '../../css/b/bst9txban.css';
import '../../css/k/k8boz-k8c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc25tg1zz"/><path class="bst9txban"/><path class="k8boz-k8c"/>`,
		"fallback": "selfhst:domainmod-dark",
	});
}

export default Component;
