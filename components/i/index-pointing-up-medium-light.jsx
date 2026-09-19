import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dacseubpu.css';
import '../../css/m/mc7fr3q6u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dacseubpu"/><path class="mc7fr3q6u"/></g>`,
		"fallback": "fluent-emoji-flat:index-pointing-up-medium-light",
	});
}

export default Component;
