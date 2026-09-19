import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/c/c9lv-cbco.css';
import '../../css/k/kn7lbygey.css';
import '../../css/o/o712a_czv.css';
import '../../css/d/d0nxhzblg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="c9lv-cbco"/><path class="kn7lbygey"/><path class="o712a_czv"/><circle class="d0nxhzblg"/></g>`,
		"fallback": "icon-park:hair-dryer-one",
	});
}

export default Component;
