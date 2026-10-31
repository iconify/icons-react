import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kgr9m0bmi.css';
import '../../css/x/xd0veabmf.css';
import '../../css/n/n3jvmegul.css';
import '../../css/p/pfyyz2i1z.css';
import '../../css/a/a0o9nky4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="kgr9m0bmi"/><path class="wm-shine xd0veabmf"/><path class="n3jvmegul wm-k"/><path class="pfyyz2i1z wm-a"/><path class="a0o9nky4v wm-deco"/></g>`,
		"fallback": "withicons-kawaii:file-down",
	});
}

export default Component;
