import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzgpz6bbq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzgpz6bbq"/>`,
		"fallback": "streamline-plump:business-progress-bar-2",
	});
}

export default Component;
