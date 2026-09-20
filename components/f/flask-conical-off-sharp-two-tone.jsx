import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/mutq2p_rd.css';
import '../../css/o/o6099mb7z.css';
import '../../css/f/fi8fabbiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="mutq2p_rd"/><path class="o6099mb7z"/><path class="fi8fabbiq"/></g>`,
		"fallback": "keyline-icons:flask-conical-off-sharp-two-tone",
	});
}

export default Component;
