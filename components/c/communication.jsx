import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwj90ui2v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pwj90ui2v"/>`,
		"fallback": "healthicons:communication",
	});
}

export default Component;
