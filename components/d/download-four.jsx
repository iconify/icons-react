import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/i/idwhgl51m.css';
import '../../css/q/qvra_uwad.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path clip-rule="evenodd" class="idwhgl51m"/><path class="qvra_uwad"/></g>`,
		"fallback": "icon-park-solid:download-four",
	});
}

export default Component;
