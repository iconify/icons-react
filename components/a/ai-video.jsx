import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z-jhzydsn.css';
import '../../css/t/t5jtssa3a.css';
import '../../css/s/s_df3qblw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z-jhzydsn"/><path class="t5jtssa3a"/><path class="s_df3qblw"/></g>`,
		"fallback": "tdesign:ai-video",
	});
}

export default Component;
