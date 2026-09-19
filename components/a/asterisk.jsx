import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/x/x-eit7b8n.css';
import '../../css/x/x8am1obfu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="x-eit7b8n"/><path class="x8am1obfu"/></g>`,
		"fallback": "glyphs-poly:asterisk",
	});
}

export default Component;
