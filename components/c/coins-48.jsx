import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqf7b7ozo.css';
import '../../css/x/xa5rde75k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqf7b7ozo"/><path class="xa5rde75k"/>`,
		"fallback": "energy-icons:coins-48",
	});
}

export default Component;
