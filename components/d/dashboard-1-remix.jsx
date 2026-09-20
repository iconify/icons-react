import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw0xzpbud.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iw0xzpbud"/>`,
		"fallback": "streamline-plump:dashboard-1-remix",
	});
}

export default Component;
