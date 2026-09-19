import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n60wjcjrd.css';
import '../../css/a/andv3-32c.css';
import '../../css/f/fvk7u7b5c.css';
import '../../css/l/l5c5w086j.css';
import '../../css/j/jz-3qjbhm.css';
import '../../css/a/ai-kegb5p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n60wjcjrd"/><path class="andv3-32c"/><path class="fvk7u7b5c"/><path class="l5c5w086j"/><path class="jz-3qjbhm"/><path class="ai-kegb5p"/></g>`,
		"fallback": "fluent-emoji-flat:cow-face",
	});
}

export default Component;
