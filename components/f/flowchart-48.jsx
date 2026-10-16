import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu98hpkgc.css';
import '../../css/u/uu29n6b9n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu98hpkgc"/><path class="uu29n6b9n"/>`,
		"fallback": "energy-icons:flowchart-48",
	});
}

export default Component;
