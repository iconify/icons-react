import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bm26asbdx.css';
import '../../css/x/x5gn8k1yk.css';
import '../../css/b/blp2wgbqz.css';
import '../../css/q/q8p3fcbkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="bm26asbdx"/><path class="x5gn8k1yk"/><path class="blp2wgbqz"/><path class="q8p3fcbkm"/></g>`,
		"fallback": "gcp:app-engine",
	});
}

export default Component;
