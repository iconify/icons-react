import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l92osheri.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/ztl_5qjda.css';
import '../../css/j/j1p3l6bzk.css';
import '../../css/n/n41jx5b9q.css';
import '../../css/r/r-ge1zblt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l92osheri secondary"/><g class="dt0cm9dhy primary"><path class="ztl_5qjda"/><path class="j1p3l6bzk"/><path class="n41jx5b9q"/><path class="r-ge1zblt"/></g>`,
		"fallback": "iconaut:alarm-clock-x-duo",
	});
}

export default Component;
