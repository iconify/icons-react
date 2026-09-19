import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqa24mboe.css';
import '../../css/c/cqyqq6z0v.css';
import '../../css/m/musmm9byc.css';
import '../../css/w/wob9h1fyq.css';
import '../../css/s/sjumnwy_t.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 dqa24mboe"/><path class="clr-i-outline clr-i-outline-path-2 cqyqq6z0v"/><path class="clr-i-outline clr-i-outline-path-3 musmm9byc"/><path class="clr-i-outline clr-i-outline-path-4 wob9h1fyq"/><path class="clr-i-outline clr-i-outline-path-5 sjumnwy_t"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:host-group-line",
	});
}

export default Component;
