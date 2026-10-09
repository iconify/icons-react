import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8yec1dno.css';
import '../../css/c/cntw57bva.css';
import '../../css/v/vo5xihh_v.css';
import '../../css/d/dtp5yccxt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8yec1dno"/><path class="cntw57bva"/><path class="vo5xihh_v"/><path class="dtp5yccxt"/>`,
		"fallback": "energy-icons:construction-crane-48-bold",
	});
}

export default Component;
