import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/d/d3_kq194u.css';
import '../../css/w/w71o0-pby.css';
import '../../css/n/n3jvmegul.css';
import '../../css/k/kywtiqb7d.css';
import '../../css/a/a0o9nky4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="d3_kq194u"/><path class="w71o0-pby wm-shine"/><path class="n3jvmegul wm-k"/><path class="kywtiqb7d wm-a"/><path class="a0o9nky4v wm-deco"/></g>`,
		"fallback": "withicons-kawaii:file-image",
	});
}

export default Component;
