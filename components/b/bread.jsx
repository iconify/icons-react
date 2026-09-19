import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kjk32mb3j.css';
import '../../css/s/s3mx7zbgb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kjk32mb3j"/><path class="s3mx7zbgb"/></g>`,
		"fallback": "fluent-emoji-high-contrast:bread",
	});
}

export default Component;
