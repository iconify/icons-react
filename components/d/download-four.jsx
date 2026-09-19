import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/x/xsa7a0bbn.css';
import '../../css/q/qvra_uwad.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path clip-rule="evenodd" class="xsa7a0bbn"/><path class="qvra_uwad"/></g>`,
		"fallback": "icon-park-outline:download-four",
	});
}

export default Component;
