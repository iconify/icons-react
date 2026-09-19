import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m3mjhjsib.css';
import '../../css/u/uw7kh3tvy.css';
import '../../css/z/z70us2r6z.css';
import '../../css/t/td_xgwz2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="m3mjhjsib"/><path class="uw7kh3tvy"/><path class="z70us2r6z"/><path class="td_xgwz2t"/></g>`,
		"fallback": "hugeicons:flowchart-02",
	});
}

export default Component;
