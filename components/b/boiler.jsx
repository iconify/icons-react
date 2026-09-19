import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/a/a-c5vwb3a.css';
import '../../css/h/hizj3i7nm.css';
import '../../css/f/fog77mvfq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><rect class="a-c5vwb3a"/><path class="hizj3i7nm"/><path class="fog77mvfq"/></g>`,
		"fallback": "icon-park-outline:boiler",
	});
}

export default Component;
