import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruxahrt1i.css';
import '../../css/q/qb44u234v.css';
import '../../css/u/uk0gurbfn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruxahrt1i"/><path class="qb44u234v"/><path class="uk0gurbfn"/>`,
		"fallback": "flat-color-icons:capacitor",
	});
}

export default Component;
