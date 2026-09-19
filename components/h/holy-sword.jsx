import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3t3o83lg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3t3o83lg"/>`,
		"fallback": "icon-park-outline:holy-sword",
	});
}

export default Component;
