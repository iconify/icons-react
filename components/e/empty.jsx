import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm3_yrfqm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm3_yrfqm"/>`,
		"fallback": "icon-park-outline:empty",
	});
}

export default Component;
