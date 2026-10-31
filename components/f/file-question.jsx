import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fw22vcbnw.css';
import '../../css/d/da9i-lbyc.css';
import '../../css/n/n3jvmegul.css';
import '../../css/n/nhuft9bkb.css';
import '../../css/a/a0o9nky4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="fw22vcbnw"/><path class="da9i-lbyc wm-shine"/><path class="n3jvmegul wm-k"/><path class="nhuft9bkb wm-a"/><path class="a0o9nky4v wm-deco"/></g>`,
		"fallback": "withicons-kawaii:file-question",
	});
}

export default Component;
