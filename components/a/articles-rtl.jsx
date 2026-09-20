import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krjyr2bou.css';
import '../../css/e/e9nqe7b2h.css';
import '../../css/k/k8ixw89dy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krjyr2bou"/><path class="e9nqe7b2h"/><path class="k8ixw89dy"/>`,
		"fallback": "ooui:articles-rtl",
	});
}

export default Component;
