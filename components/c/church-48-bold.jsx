import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvhllmb7y.css';
import '../../css/p/pdneidbqf.css';
import '../../css/g/gefufqhah.css';
import '../../css/f/fp4n13b1w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvhllmb7y"/><path class="pdneidbqf"/><path class="gefufqhah"/><path class="fp4n13b1w"/>`,
		"fallback": "energy-icons:church-48-bold",
	});
}

export default Component;
