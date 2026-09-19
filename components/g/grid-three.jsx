import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/l/lyard7xsu.css';
import '../../css/w/wdmhf0zli.css';
import '../../css/q/quldjab0d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="lyard7xsu"/><path class="wdmhf0zli"/><path class="quldjab0d"/></g>`,
		"fallback": "icon-park:grid-three",
	});
}

export default Component;
