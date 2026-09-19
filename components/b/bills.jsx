import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g5fj2gb9b.css';
import '../../css/s/s1kzwjbvm.css';
import '../../css/d/dh_uqzb2b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g5fj2gb9b"/><path class="s1kzwjbvm"/><path clip-rule="evenodd" class="dh_uqzb2b"/></g>`,
		"fallback": "healthicons:bills",
	});
}

export default Component;
