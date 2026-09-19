import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sy25vmbhr.css';
import '../../css/v/vvhyatv6v.css';
import '../../css/b/bp5fwubdt.css';
import '../../css/f/f10zp4qwq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sy25vmbhr"/><path clip-rule="evenodd" class="vvhyatv6v"/><path class="bp5fwubdt"/><path clip-rule="evenodd" class="f10zp4qwq"/></g>`,
		"fallback": "glyphs:hourglass-100-outline",
	});
}

export default Component;
