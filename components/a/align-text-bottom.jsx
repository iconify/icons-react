import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qefw8rbzt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qefw8rbzt"/>`,
		"fallback": "icon-park-outline:align-text-bottom",
	});
}

export default Component;
