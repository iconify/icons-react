import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h3jlyst8a.css';
import '../../css/l/lk8fc0dkw.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="h3jlyst8a"/><path class="lk8fc0dkw"/></g>`,
		"fallback": "si-glyph:compass",
	});
}

export default Component;
