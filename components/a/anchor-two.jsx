import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/nlz27rbmf.css';
import '../../css/m/mcnb5dgfv.css';
import '../../css/m/mkx12cc6f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="nlz27rbmf"/><path class="mcnb5dgfv"/><path clip-rule="evenodd" class="mkx12cc6f"/></g>`,
		"fallback": "icon-park:anchor-two",
	});
}

export default Component;
