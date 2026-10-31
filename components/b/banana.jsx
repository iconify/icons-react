import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/u/u9a5labme.css';
import '../../css/u/usbyh2bii.css';
import '../../css/t/taaqanbit.css';
import '../../css/v/vxyac5iur.css';
import '../../css/t/tgsx53bsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="u9a5labme"/><path class="usbyh2bii wm-shine"/><path class="taaqanbit wm-k"/><path class="vxyac5iur wm-a"/><path class="tgsx53bsj wm-deco"/></g>`,
		"fallback": "withicons-kawaii:banana",
	});
}

export default Component;
