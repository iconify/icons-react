import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/b/bvsicac_i.css';
import '../../css/k/kfk_307bu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="bvsicac_i"/><path class="kfk_307bu"/></g>`,
		"fallback": "icon-park-outline:bib",
	});
}

export default Component;
