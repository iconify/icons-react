import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrng66bph.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrng66bph"/>`,
		"fallback": "icon-park-outline:down-two",
	});
}

export default Component;
