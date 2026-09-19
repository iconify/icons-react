import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7a51mr5w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7a51mr5w"/>`,
		"fallback": "icon-park-outline:four-point-connection",
	});
}

export default Component;
