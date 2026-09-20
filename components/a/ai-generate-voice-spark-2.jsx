import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mj6fgwbpa.css';
import '../../css/d/dmb1-dajn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="mj6fgwbpa"/><path class="dmb1-dajn"/></g>`,
		"fallback": "streamline-sharp:ai-generate-voice-spark-2",
	});
}

export default Component;
