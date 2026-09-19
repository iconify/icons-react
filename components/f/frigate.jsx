import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/am4lb-bdv.css';
import '../../css/l/ln7fn5cus.css';
import '../../css/s/scyn38bvf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="am4lb-bdv"/><path class="ln7fn5cus"/><path class="scyn38bvf"/></g>`,
		"fallback": "icon-park-outline:frigate",
	});
}

export default Component;
