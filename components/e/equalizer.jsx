import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/r/rwog68bpz.css';
import '../../css/a/au2jgvocl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="rwog68bpz"/><path class="au2jgvocl"/></g>`,
		"fallback": "icon-park-outline:equalizer",
	});
}

export default Component;
