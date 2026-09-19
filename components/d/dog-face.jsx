import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qbw92nqef.css';
import '../../css/s/s8zn4lb8f.css';
import '../../css/l/lvgy32b4t.css';
import '../../css/a/a567h385m.css';
import '../../css/t/tnxf2bc6n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qbw92nqef"/><path class="s8zn4lb8f"/><path class="lvgy32b4t"/><path class="a567h385m"/><path class="tnxf2bc6n"/></g>`,
		"fallback": "fluent-emoji-flat:dog-face",
	});
}

export default Component;
