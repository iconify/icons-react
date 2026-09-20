import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/d/di28f0bkm.css';
import '../../css/m/moxwhybng.css';
import '../../css/z/z0292u9ta.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="di28f0bkm"/><path class="moxwhybng"/><path class="z0292u9ta"/></g>`,
		"fallback": "streamline-plump:bitcoin-circle-1",
	});
}

export default Component;
