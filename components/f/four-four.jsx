import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6l2gp-bi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6l2gp-bi"/>`,
		"fallback": "icon-park-solid:four-four",
	});
}

export default Component;
