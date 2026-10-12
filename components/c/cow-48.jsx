import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxvst7bbl.css';
import '../../css/s/syk3pwbrl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxvst7bbl"/><path class="syk3pwbrl"/>`,
		"fallback": "energy-icons:cow-48",
	});
}

export default Component;
