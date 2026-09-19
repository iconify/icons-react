import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oet0gjbvr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oet0gjbvr"/>`,
		"fallback": "icon-park:fire",
	});
}

export default Component;
