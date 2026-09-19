import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqzf6mblp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wqzf6mblp"/>`,
		"fallback": "healthicons:cpap-tubes-outline",
	});
}

export default Component;
