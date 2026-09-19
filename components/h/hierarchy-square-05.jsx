import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pr22v6kld.css';
import '../../css/k/kq0341bef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pr22v6kld"/><path class="kq0341bef"/></g>`,
		"fallback": "hugeicons:hierarchy-square-05",
	});
}

export default Component;
