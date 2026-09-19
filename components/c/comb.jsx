import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3tx3lj_r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3tx3lj_r"/>`,
		"fallback": "icon-park-outline:comb",
	});
}

export default Component;
