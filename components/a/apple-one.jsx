import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/uz5a9fb8c.css';
import '../../css/s/sqfsm7btn.css';
import '../../css/b/b98kc6bwu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path clip-rule="evenodd" class="uz5a9fb8c"/><path class="sqfsm7btn"/><path class="b98kc6bwu"/></g>`,
		"fallback": "icon-park:apple-one",
	});
}

export default Component;
