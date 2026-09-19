import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fuxusi6tu.css';
import '../../css/q/qy2_82b8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fuxusi6tu"/><path class="qy2_82b8b"/></g>`,
		"fallback": "hugeicons:cos",
	});
}

export default Component;
