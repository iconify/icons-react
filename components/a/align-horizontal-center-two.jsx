import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypv2wabxw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypv2wabxw"/>`,
		"fallback": "icon-park-outline:align-horizontal-center-two",
	});
}

export default Component;
