import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swn4cmbfm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swn4cmbfm"/>`,
		"fallback": "icon-park-solid:activity-source",
	});
}

export default Component;
