import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/e/ew9nsebxo.css';
import '../../css/z/zpwvf7p3r.css';
import '../../css/q/q40rjrbel.css';
import '../../css/n/n3jvmegul.css';
import '../../css/o/o29gqjbrc.css';
import '../../css/a/a0o9nky4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ew9nsebxo"/><path class="zpwvf7p3r"/><path class="q40rjrbel wm-shine"/><path class="n3jvmegul wm-k"/><path class="o29gqjbrc wm-a"/><path class="a0o9nky4v wm-deco"/></g>`,
		"fallback": "withicons-kawaii:file-audio",
	});
}

export default Component;
