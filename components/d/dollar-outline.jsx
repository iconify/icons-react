import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8mmt_bwh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b8mmt_bwh"/>`,
		"fallback": "healthicons:dollar-outline",
	});
}

export default Component;
