import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/v/vbpfkdbof.css';
import '../../css/b/b5s2fab7g.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="vbpfkdbof"/><path class="b5s2fab7g"/></g>`,
		"fallback": "marketeq:adapter-3",
	});
}

export default Component;
