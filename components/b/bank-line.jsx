import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvt1gcg3a.css';
import '../../css/x/xmi_xtc0b.css';
import '../../css/h/hk0k06b_j.css';
import '../../css/q/qxuhi5b7y.css';
import '../../css/b/bzg79qb1j.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 dvt1gcg3a"/><path class="clr-i-outline clr-i-outline-path-2 xmi_xtc0b"/><path class="clr-i-outline clr-i-outline-path-3 hk0k06b_j"/><path class="clr-i-outline clr-i-outline-path-4 qxuhi5b7y"/><path class="bzg79qb1j clr-i-outline clr-i-outline-path-5"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:bank-line",
	});
}

export default Component;
