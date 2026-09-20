import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/j1kgb1ejc.css';
import '../../css/n/nsbv8cbky.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="j1kgb1ejc"/><path class="nsbv8cbky"/></g>`,
		"fallback": "marketeq:file-video-4",
	});
}

export default Component;
