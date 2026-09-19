import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tbjwq7z1x.css';
import '../../css/i/i61tymsyr.css';
import '../../css/b/bzs2jobta.css';
import '../../css/v/vidyn3b5f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tbjwq7z1x"/><path class="i61tymsyr"/><path class="bzs2jobta"/><path class="vidyn3b5f"/></g>`,
		"fallback": "glyphs:copy-duo",
	});
}

export default Component;
