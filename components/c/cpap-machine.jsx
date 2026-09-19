import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3nib0-4v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y3nib0-4v"/>`,
		"fallback": "healthicons:cpap-machine",
	});
}

export default Component;
