import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nggm-pbee.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nggm-pbee"/>`,
		"fallback": "icon-park-solid:easy",
	});
}

export default Component;
