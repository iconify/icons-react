import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmdr1llum.css';
import '../../css/r/r0z87ttka.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmdr1llum"/><path class="r0z87ttka"/>`,
		"fallback": "energy-icons:connector-nacs-48-bold",
	});
}

export default Component;
