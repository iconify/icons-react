import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/r/rufnrabwk.css';
import '../../css/x/x8vqyba_e.css';
import '../../css/w/w-qsszzgh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path clip-rule="evenodd" class="rufnrabwk"/><path class="x8vqyba_e"/><path clip-rule="evenodd" class="w-qsszzgh"/></g>`,
		"fallback": "streamline-plump:horizonal-scroll",
	});
}

export default Component;
