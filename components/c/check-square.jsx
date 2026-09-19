import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/i/iwzi1nbxx.css';
import '../../css/h/h4l4yqvep.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><rect class="iwzi1nbxx"/><path class="h4l4yqvep"/></g>`,
		"fallback": "glyphs-poly:check-square",
	});
}

export default Component;
