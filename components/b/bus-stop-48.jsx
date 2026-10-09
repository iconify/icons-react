import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8aavvbfy.css';
import '../../css/g/ga25m-gng.css';
import '../../css/z/zgolj6bns.css';
import '../../css/w/w9hxef2ad.css';
import '../../css/p/pwrb__blp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8aavvbfy"/><path class="ga25m-gng"/><path class="zgolj6bns"/><path class="w9hxef2ad"/><path class="pwrb__blp"/>`,
		"fallback": "energy-icons:bus-stop-48",
	});
}

export default Component;
