import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/deeudtm6r.css';
import '../../css/y/yneq0mmvw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="deeudtm6r"/><path class="yneq0mmvw"/></g>`,
		"fallback": "glyphs:heartbeat-duo",
	});
}

export default Component;
