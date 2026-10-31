import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/o/o7qhtactx.css';
import '../../css/l/lllogccpz.css';
import '../../css/c/cybe97bxb.css';
import '../../css/n/n3jvmegul.css';
import '../../css/f/ffnj5pzwv.css';
import '../../css/a/a0o9nky4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="o7qhtactx"/><path class="lllogccpz"/><path class="cybe97bxb wm-shine"/><path class="n3jvmegul wm-k"/><path class="ffnj5pzwv wm-a"/><path class="a0o9nky4v wm-deco"/></g>`,
		"fallback": "withicons-kawaii:file-search",
	});
}

export default Component;
