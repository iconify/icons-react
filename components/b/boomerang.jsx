import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rf-_2pb5r.css';
import '../../css/t/tzlidozdb.css';
import '../../css/v/vu8hxubof.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rf-_2pb5r"/><path class="tzlidozdb"/><path class="vu8hxubof"/></g>`,
		"fallback": "fluent-emoji-flat:boomerang",
	});
}

export default Component;
