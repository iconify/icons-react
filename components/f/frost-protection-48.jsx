import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlsrljbwz.css';
import '../../css/y/yokveq1he.css';
import '../../css/d/db2grsbbs.css';
import '../../css/u/ul6bszbon.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlsrljbwz"/><path class="yokveq1he"/><path class="db2grsbbs"/><path class="ul6bszbon"/>`,
		"fallback": "energy-icons:frost-protection-48",
	});
}

export default Component;
