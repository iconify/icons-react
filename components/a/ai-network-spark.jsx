import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/v8g0qsaqc.css';
import '../../css/d/db0ll9b1s.css';
import '../../css/v/vgpachbif.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="v8g0qsaqc"/><path class="db0ll9b1s"/><path class="vgpachbif"/></g>`,
		"fallback": "streamline:ai-network-spark",
	});
}

export default Component;
