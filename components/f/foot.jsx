import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b2b16wbvz.css';
import '../../css/r/rs61gez4m.css';
import '../../css/l/lmjzrrkso.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b2b16wbvz"/><path class="rs61gez4m"/><path class="lmjzrrkso"/></g>`,
		"fallback": "fluent-emoji-flat:foot",
	});
}

export default Component;
