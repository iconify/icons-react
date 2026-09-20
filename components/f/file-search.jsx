import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/m/m49l8pwol.css';
import '../../css/w/wuhe8bc2l.css';
import '../../css/o/opzb1vb-n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path clip-rule="evenodd" class="m49l8pwol"/><path class="wuhe8bc2l"/><path class="opzb1vb-n"/></g>`,
		"fallback": "streamline-plump:file-search",
	});
}

export default Component;
