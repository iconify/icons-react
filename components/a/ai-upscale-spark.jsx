import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/q/qj884abyl.css';
import '../../css/r/raqu8_bwm.css';
import '../../css/n/nwvq3mror.css';
import '../../css/m/mz4uawbdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="qj884abyl"/><path class="raqu8_bwm"/><path class="nwvq3mror"/><path class="mz4uawbdc"/></g>`,
		"fallback": "streamline-sharp-color:ai-upscale-spark",
	});
}

export default Component;
