import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/btfknrzgi.css';
import '../../css/a/akwxa_yxs.css';
import '../../css/p/p5elmg96x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="btfknrzgi"/><path class="akwxa_yxs"/><path class="p5elmg96x"/></g>`,
		"fallback": "icon-park-outline:application-effect",
	});
}

export default Component;
