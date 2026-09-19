import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/n/nu-dcbk7y.css';
import '../../css/h/h6v6zvb0y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><rect class="nu-dcbk7y"/><path class="h6v6zvb0y"/></g>`,
		"fallback": "glyphs-poly:chevron-square",
	});
}

export default Component;
