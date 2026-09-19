import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt-mm9atl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt-mm9atl"/>`,
		"fallback": "icon-park-outline:five-ellipses",
	});
}

export default Component;
