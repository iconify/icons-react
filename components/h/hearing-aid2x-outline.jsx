import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-ooy-buy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b-ooy-buy"/>`,
		"fallback": "healthicons:hearing-aid2x-outline",
	});
}

export default Component;
