import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgmkij3-a.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgmkij3-a"/>`,
		"fallback": "pullo:bell-dot-fill",
	});
}

export default Component;
