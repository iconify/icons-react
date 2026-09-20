import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ea90dub6v.css';
import '../../css/g/gbci9hyta.css';
import '../../css/e/ej0drdrvm.css';
import '../../css/k/ks_49ybnb.css';
import '../../css/o/o_nlurf6b.css';
import '../../css/j/jiw1pkbmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ea90dub6v"/><path class="gbci9hyta"/><path class="ej0drdrvm"/><path class="ks_49ybnb"/><path class="o_nlurf6b"/><path class="jiw1pkbmf"/></g>`,
		"fallback": "solar:cassette-2-linear",
	});
}

export default Component;
