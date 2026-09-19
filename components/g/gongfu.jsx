import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/b/blwnmgb8p.css';
import '../../css/p/p791a-b5x.css';
import '../../css/e/ekhzbdo6v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><circle class="blwnmgb8p"/><path class="p791a-b5x"/><path class="ekhzbdo6v"/></g>`,
		"fallback": "icon-park:gongfu",
	});
}

export default Component;
