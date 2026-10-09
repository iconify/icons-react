import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odlpk9b9a.css';
import '../../css/q/q2hfd_b_u.css';
import '../../css/t/tbml7r8ok.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odlpk9b9a"/><path class="q2hfd_b_u"/><path class="tbml7r8ok"/>`,
		"fallback": "energy-icons:fireplace-48-bold",
	});
}

export default Component;
