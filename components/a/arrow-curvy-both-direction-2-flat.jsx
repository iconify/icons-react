import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxgi8ob_v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wxgi8ob_v"/>`,
		"fallback": "streamline-plump-color:arrow-curvy-both-direction-2-flat",
	});
}

export default Component;
