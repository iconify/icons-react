import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mrtq9bbsf.css';
import '../../css/d/dos_yhbgg.css';
import '../../css/e/ez1x61b2a.css';
import '../../css/p/pgqqfilfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="mrtq9bbsf"/><circle class="dos_yhbgg"/><circle class="ez1x61b2a"/><path class="pgqqfilfj"/></g>`,
		"fallback": "solar:bicycling-round-broken",
	});
}

export default Component;
