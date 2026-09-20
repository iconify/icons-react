import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cco-awbeq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cco-awbeq"/>`,
		"fallback": "streamline-plump:calendar-check-remix",
	});
}

export default Component;
