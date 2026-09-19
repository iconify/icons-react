import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r037uibrd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r037uibrd"/>`,
		"fallback": "icon-park-outline:exchange-one",
	});
}

export default Component;
