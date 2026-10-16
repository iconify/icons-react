import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stnu0vheg.css';
import '../../css/a/ai0b0ebrn.css';
import '../../css/o/oif1g5bvc.css';
import '../../css/z/z0v5_fbef.css';
import '../../css/s/sh06c0bcw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stnu0vheg"/><path class="ai0b0ebrn"/><path class="oif1g5bvc"/><path class="z0v5_fbef"/><path class="sh06c0bcw"/>`,
		"fallback": "energy-icons:database-check-20-bold",
	});
}

export default Component;
