import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fw22vcbnw.css';
import '../../css/x/xd0veabmf.css';
import '../../css/n/n3jvmegul.css';
import '../../css/j/ju4zm1b1x.css';
import '../../css/a/a0o9nky4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="fw22vcbnw"/><path class="wm-shine xd0veabmf"/><path class="n3jvmegul wm-k"/><path class="ju4zm1b1x wm-a"/><path class="a0o9nky4v wm-deco"/></g>`,
		"fallback": "withicons-kawaii:file-pdf",
	});
}

export default Component;
