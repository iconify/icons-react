import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/q/q-xykcbmy.css';
import '../../css/t/tltef3bzw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="q-xykcbmy"/><path class="tltef3bzw"/></g>`,
		"fallback": "streamline-plump:facebook-1",
	});
}

export default Component;
