import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w0kto8s3b.css';
import '../../css/x/x2wo05btj.css';
import '../../css/l/lupto5cbo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w0kto8s3b"/><path class="x2wo05btj"/><path clip-rule="evenodd" class="lupto5cbo"/></g>`,
		"fallback": "fluent-emoji-high-contrast:cook",
	});
}

export default Component;
