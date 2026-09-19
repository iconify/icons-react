import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nqutd0t8i.css';
import '../../css/u/u3za9bbif.css';
import '../../css/b/bwjyjvbqo.css';
import '../../css/e/e5jtqhbmi.css';
import '../../css/a/aehsqdmwc.css';
import '../../css/z/ze-fd0bhh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nqutd0t8i"/><path class="u3za9bbif"/><path class="bwjyjvbqo"/><path class="e5jtqhbmi"/><path class="aehsqdmwc"/><path class="ze-fd0bhh"/></g>`,
		"fallback": "fluent-emoji-flat:duck",
	});
}

export default Component;
