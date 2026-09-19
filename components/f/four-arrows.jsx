import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd-6131oz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd-6131oz"/>`,
		"fallback": "icon-park-outline:four-arrows",
	});
}

export default Component;
