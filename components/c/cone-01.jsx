import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bcpfhjh0w.css';
import '../../css/s/suorp_b8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bcpfhjh0w"/><path class="suorp_b8p"/></g>`,
		"fallback": "hugeicons:cone-01",
	});
}

export default Component;
