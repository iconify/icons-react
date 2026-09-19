import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/l/l5l0yeoqo.css';
import '../../css/r/rtm9ribch.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><rect class="l5l0yeoqo"/><path class="rtm9ribch"/></g>`,
		"fallback": "icon-park-outline:grid-nine",
	});
}

export default Component;
