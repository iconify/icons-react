import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj4db04ha.css';
import '../../css/x/xr7c334jq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj4db04ha"/><path class="xr7c334jq"/>`,
		"fallback": "garden:exclamation-triangle-stroke-20",
	});
}

export default Component;
