import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1dnfsbtv.css';
import '../../css/x/xvzet0dgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1dnfsbtv"/><path class="xvzet0dgi"/>`,
		"fallback": "mage:filter-square-fill",
	});
}

export default Component;
