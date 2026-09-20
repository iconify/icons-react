import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ku4vj08hf.css';
import '../../css/e/evtwufbhm.css';
import '../../css/a/acdxx4bqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ku4vj08hf"/><path class="evtwufbhm"/><path class="acdxx4bqk"/></g>`,
		"fallback": "pixelarticons:bug",
	});
}

export default Component;
