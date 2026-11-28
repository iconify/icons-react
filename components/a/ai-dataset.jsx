import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o4w-2_jvj.css';
import '../../css/b/bab-ptlum.css';
import '../../css/n/nvqat8ovl.css';
import '../../css/e/e9v8jcb4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="o4w-2_jvj"/><path class="bab-ptlum"/><path class="nvqat8ovl"/><path class="e9v8jcb4j"/></g>`,
		"fallback": "iconaut:ai-dataset",
	});
}

export default Component;
