import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/q/qa_prub3o.css';
import '../../css/f/fnd2alblp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="qa_prub3o"/><path class="fnd2alblp"/></g>`,
		"fallback": "glyphs-poly:align-justify",
	});
}

export default Component;
