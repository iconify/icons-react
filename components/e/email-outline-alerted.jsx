import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aks1zrbnk.css';
import '../../css/q/qy7dv0tza.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aks1zrbnk clr-i-outline--alerted clr-i-outline-path-1--alerted"/><path class="clr-i-alert clr-i-outline--alerted clr-i-outline-path-2--alerted qy7dv0tza"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:email-outline-alerted",
	});
}

export default Component;
