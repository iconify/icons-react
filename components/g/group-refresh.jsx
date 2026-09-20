import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/c/cscsqzkth.css';
import '../../css/n/nvy11mm1d.css';
import '../../css/w/wye399btu.css';
import '../../css/y/yevf8wb5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="cscsqzkth"/><path class="nvy11mm1d"/><path class="wye399btu"/><path class="yevf8wb5q"/></g>`,
		"fallback": "streamline-cyber:group-refresh",
	});
}

export default Component;
