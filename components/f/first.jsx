import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/y/y9asrdbdh.css';
import '../../css/m/m810m5fjg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="y9asrdbdh"/><path class="m810m5fjg"/></g>`,
		"fallback": "icon-park-outline:first",
	});
}

export default Component;
