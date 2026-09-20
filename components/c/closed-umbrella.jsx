import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc7jtpbps.css';
import '../../css/e/e3_eajjzt.css';
import '../../css/h/h4ktmjrgl.css';
import '../../css/u/uh48u-war.css';
import '../../css/d/dudbm7bdy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc7jtpbps"/><path class="e3_eajjzt"/><path class="h4ktmjrgl"/><path class="uh48u-war"/><path class="dudbm7bdy"/>`,
		"fallback": "streamline-emojis:closed-umbrella",
	});
}

export default Component;
