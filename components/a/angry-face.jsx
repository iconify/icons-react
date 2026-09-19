import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a1qdm02pd.css';
import '../../css/o/o72kk2b-f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a1qdm02pd"/><path class="o72kk2b-f"/></g>`,
		"fallback": "fluent-emoji-high-contrast:angry-face",
	});
}

export default Component;
