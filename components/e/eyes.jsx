import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/b/bxwdkp16c.css';
import '../../css/w/w-5ltnd5j.css';
import '../../css/l/l_t1d5bcy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path clip-rule="evenodd" class="bxwdkp16c"/><path class="w-5ltnd5j"/><path class="l_t1d5bcy"/></g>`,
		"fallback": "icon-park-outline:eyes",
	});
}

export default Component;
