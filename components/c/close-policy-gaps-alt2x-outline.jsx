import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd0vvtb1y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xd0vvtb1y"/>`,
		"fallback": "healthicons:close-policy-gaps-alt2x-outline",
	});
}

export default Component;
