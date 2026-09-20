import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/e/eym2stwku.css';
import '../../css/q/qy7wletcv.css';
import '../../css/v/vz9cs25rz.css';
import '../../css/m/m3c5uac9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="eym2stwku"/><path class="qy7wletcv"/><path class="vz9cs25rz"/><path class="m3c5uac9e"/></g>`,
		"fallback": "streamline-sharp-color:emergency-call",
	});
}

export default Component;
