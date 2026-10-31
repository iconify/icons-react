import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/a/a38ii-b7l.css';
import '../../css/z/zwnn_sb4u.css';
import '../../css/n/n3jvmegul.css';
import '../../css/v/vrpgvia9s.css';
import '../../css/a/a0o9nky4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="a38ii-b7l"/><path class="wm-shine zwnn_sb4u"/><path class="n3jvmegul wm-k"/><path class="vrpgvia9s wm-a"/><path class="a0o9nky4v wm-deco"/></g>`,
		"fallback": "withicons-kawaii:file-chart",
	});
}

export default Component;
