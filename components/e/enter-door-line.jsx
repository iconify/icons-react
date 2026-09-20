import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak-hxv74i.css';
import '../../css/g/gc_nzob2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ak-hxv74i"/><path class="gc_nzob2v"/>`,
		"fallback": "mingcute:enter-door-line",
	});
}

export default Component;
