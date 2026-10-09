import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu0zqnbaj.css';
import '../../css/n/nk5nmmbrn.css';
import '../../css/q/qm9ru_b3u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu0zqnbaj"/><path class="nk5nmmbrn"/><path class="qm9ru_b3u"/>`,
		"fallback": "energy-icons:charger-fault-20",
	});
}

export default Component;
