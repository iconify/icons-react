import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uymuyxvri.css';
import '../../css/i/ipm62fn-v.css';
import '../../css/k/kovh6wfow.css';
import '../../css/n/ngcgz-pwl.css';
import '../../css/h/h-tqiie0m.css';
import '../../css/y/y7f42qsfz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uymuyxvri"/><path class="ipm62fn-v"/><circle class="kovh6wfow"/><path class="ngcgz-pwl"/><circle class="h-tqiie0m"/><circle class="y7f42qsfz"/></g>`,
		"fallback": "icon-park-outline:baby-app",
	});
}

export default Component;
