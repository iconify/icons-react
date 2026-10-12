import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qm8zf8bpm.css';
import '../../css/k/k-euat6ge.css';
import '../../css/r/r34fzgoxu.css';
import '../../css/k/kbvm9mbqu.css';
import '../../css/u/u-7roon_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qm8zf8bpm"/><path class="k-euat6ge"/><path class="r34fzgoxu"/><path class="kbvm9mbqu"/><path class="u-7roon_z"/></g>`,
		"fallback": "andrsrxn:file-reference",
	});
}

export default Component;
