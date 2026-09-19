import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/m/m5xo9q25w.css';
import '../../css/h/hizj3i7nm.css';
import '../../css/h/hytsqkbim.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><rect class="m5xo9q25w"/><path class="hizj3i7nm"/><path class="hytsqkbim"/></g>`,
		"fallback": "icon-park-solid:boiler",
	});
}

export default Component;
