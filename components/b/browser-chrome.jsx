import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvbccoxtg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvbccoxtg"/>`,
		"fallback": "icon-park-outline:browser-chrome",
	});
}

export default Component;
