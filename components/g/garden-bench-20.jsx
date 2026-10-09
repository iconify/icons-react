import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfdw6bbqs.css';
import '../../css/k/kpsjv5nug.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfdw6bbqs"/><path class="kpsjv5nug"/>`,
		"fallback": "energy-icons:garden-bench-20",
	});
}

export default Component;
