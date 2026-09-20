import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufv-l2b0j.css';
import '../../css/i/ifw64601y.css';
import '../../css/a/a14xeeb5m.css';
import '../../css/e/ezxvopb-u.css';
import '../../css/h/hrp8-jh4g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufv-l2b0j"/><g class="ifw64601y"><circle class="a14xeeb5m"/><circle class="ezxvopb-u"/><path class="hrp8-jh4g"/></g>`,
		"fallback": "material-icon-theme:folder-cart",
	});
}

export default Component;
