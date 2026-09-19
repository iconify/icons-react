import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/u/u4gjvmm-i.css';
import '../../css/w/wzezone-a.css';
import '../../css/h/hozl91a5a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="u4gjvmm-i"/><path class="wzezone-a"/><path class="hozl91a5a"/></g>`,
		"fallback": "icon-park:collection-records",
	});
}

export default Component;
