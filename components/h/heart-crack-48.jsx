import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsmyxibdu.css';
import '../../css/f/fywdbmb0y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsmyxibdu"/><path class="fywdbmb0y"/>`,
		"fallback": "energy-icons:heart-crack-48",
	});
}

export default Component;
