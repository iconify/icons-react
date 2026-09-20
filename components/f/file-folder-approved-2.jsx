import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/cwdmlvlmk.css';
import '../../css/u/u3xkgacvo.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="cwdmlvlmk"/><path class="u3xkgacvo"/></g>`,
		"fallback": "marketeq:file-folder-approved-2",
	});
}

export default Component;
