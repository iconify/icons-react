import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vz9_bub3g.css';
import '../../css/b/beeokmb8b.css';
import '../../css/e/ei6cr30no.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vz9_bub3g"/><path class="beeokmb8b"/><path class="ei6cr30no"/></g>`,
		"fallback": "streamline:ai-redo-spark",
	});
}

export default Component;
