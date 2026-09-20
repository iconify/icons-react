import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb-d1pb-w.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb-d1pb-w"/>`,
		"fallback": "picon:connected",
	});
}

export default Component;
