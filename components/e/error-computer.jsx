import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li8w93b-k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="li8w93b-k"/>`,
		"fallback": "icon-park-outline:error-computer",
	});
}

export default Component;
