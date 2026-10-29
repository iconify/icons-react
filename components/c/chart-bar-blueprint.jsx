import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/w43559lux.css';
import '../../css/n/nqwgjqbun.css';
import '../../css/w/wa7muobyt.css';
import '../../css/w/wya5wcext.css';
import '../../css/q/q7owavo8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="w43559lux wm-deco"/><path class="nqwgjqbun wm-deco"/><path class="wa7muobyt wm-k"/><path class="wm-a wya5wcext"/><path class="q7owavo8u wm-a"/></g>`,
		"fallback": "withicons:chart-bar-blueprint",
	});
}

export default Component;
