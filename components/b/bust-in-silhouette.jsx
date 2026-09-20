import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s49utgb8k.css';
import '../../css/r/r9n-e6bgq.css';
import '../../css/e/emdzxdbjn.css';
import '../../css/h/h__2xvmcv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s49utgb8k"/><path class="r9n-e6bgq"/><path class="emdzxdbjn"/><path class="h__2xvmcv"/>`,
		"fallback": "streamline-emojis:bust-in-silhouette",
	});
}

export default Component;
