import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/bsh15bben.css';
import '../../css/m/m0hgc_cfe.css';
import '../../css/n/nfm8l-yni.css';
import '../../css/l/lydanebqu.css';
import '../../css/z/znvpzhyfo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="bsh15bben"/><path class="m0hgc_cfe"/><path class="nfm8l-yni"/><path class="lydanebqu"/><path class="znvpzhyfo"/></g>`,
		"fallback": "streamline-plump-color:circle-clock",
	});
}

export default Component;
