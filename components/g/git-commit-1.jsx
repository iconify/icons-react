import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bw-kf0fku.css';
import '../../css/j/johe5ybcn.css';
import '../../css/t/tcdd8ibxt.css';
import '../../css/s/su14qkbwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="bw-kf0fku"/><path class="johe5ybcn"/><path class="tcdd8ibxt"/><path class="su14qkbwr"/></g>`,
		"fallback": "tdesign:git-commit-1",
	});
}

export default Component;
