import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu_yjk8gt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mu_yjk8gt"/>`,
		"fallback": "streamline-plump:government-building-1-remix",
	});
}

export default Component;
