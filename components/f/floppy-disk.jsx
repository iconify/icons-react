import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vyiao3hmk.css';
import '../../css/o/oo_ve568a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vyiao3hmk"/><path class="oo_ve568a"/></g>`,
		"fallback": "fluent-emoji-high-contrast:floppy-disk",
	});
}

export default Component;
