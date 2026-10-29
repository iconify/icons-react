import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wecs8qb0v.css';
import '../../css/n/n2f9v2_fd.css';
import '../../css/d/dmdo3ub8o.css';
import '../../css/d/ddigii7tx.css';
import '../../css/q/qsjhy2sbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wecs8qb0v wm-shadow"/><path class="n2f9v2_fd wm-k"/><path class="dmdo3ub8o wm-k"/><path class="ddigii7tx wm-a"/><path class="qsjhy2sbf wm-a"/>`,
		"fallback": "withicons-pastel:chevrons-left",
	});
}

export default Component;
