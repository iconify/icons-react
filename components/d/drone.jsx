import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dtesxbj3y.css';
import '../../css/a/amlmg7b2n.css';
import '../../css/h/hr07nwq7t.css';
import '../../css/t/t96a34een.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="dtesxbj3y"/><path class="amlmg7b2n"/><path class="hr07nwq7t wm-k"/><path class="t96a34een wm-a"/></g>`,
		"fallback": "withicons-kawaii:drone",
	});
}

export default Component;
