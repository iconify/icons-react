import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c083e7b2g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c083e7b2g"/>`,
		"fallback": "icon-park-outline:font-size",
	});
}

export default Component;
