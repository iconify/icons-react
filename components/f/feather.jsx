import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y42c4vbzm.css';
import '../../css/a/a4kmvabwe.css';
import '../../css/z/zehkdc87c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y42c4vbzm"/><path class="a4kmvabwe"/><path class="zehkdc87c"/></g>`,
		"fallback": "fluent-emoji-flat:feather",
	});
}

export default Component;
